import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

// Initialize Supabase client only when needed
function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !key) {
    throw new Error('Supabase credentials not configured')
  }

  return createClient(url, key)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, phone, pickupDate, returnDate, pickupLocation, returnLocation, carType, name, preferredModel } = body

    // Validate input
    if (!email || !phone || !name || !pickupLocation || !pickupDate || !returnDate) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate date range
    if (returnDate <= pickupDate) {
      return NextResponse.json(
        { error: 'Return date must be after pickup date' },
        { status: 400 }
      )
    }

    const supabase = getSupabaseClient()

    // Check availability: any existing lead for the same car type whose
    // [pickup_date, return_date) range overlaps the requested range,
    // and that is not cancelled, blocks the new booking.
    const carTypeToCheck = carType || 'standard'

    const { data: overlapping, error: availabilityError } = await supabase
      .from('leads')
      .select('id')
      .eq('car_type', carTypeToCheck)
      .neq('status', 'cancelled')
      .lt('pickup_date', returnDate)
      .gt('return_date', pickupDate)
      .limit(1)

    if (availabilityError) {
      console.error('Supabase availability check error:', availabilityError)
      return NextResponse.json(
        { error: 'Failed to check availability' },
        { status: 500 }
      )
    }

    if (overlapping && overlapping.length > 0) {
      return NextResponse.json(
        { error: 'unavailable' },
        { status: 409 }
      )
    }

    // Insert lead into Supabase
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          email,
          phone,
          pickup_date: pickupDate,
          return_date: returnDate,
          pickup_location: pickupLocation,
          return_location: returnLocation || pickupLocation,
          car_type: carTypeToCheck,
          name,
          preferred_model: preferredModel || null,
          created_at: new Date().toISOString(),
          source: 'landing_page',
        },
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to save lead' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, data },
      {
        status: 201,
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      }
    )
  } catch (err) {
    console.error('API error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
