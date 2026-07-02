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
    const { email, phone, pickupDate, pickupLocation, returnLocation, carType, name } = body

    // Validate input
    if (!email || !phone || !name || !pickupLocation) {
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

    // Get Supabase client
    const supabase = getSupabaseClient()

    // Insert lead into Supabase
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          email,
          phone,
          pickup_date: pickupDate,
          pickup_location: pickupLocation,
          return_location: returnLocation || pickupLocation,
          car_type: carType || 'inquiry',
          name,
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
