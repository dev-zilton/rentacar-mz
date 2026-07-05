import { createClient } from '@supabase/supabase-js'

/**
 * Server-only Supabase client using the service role key.
 * Bypasses RLS — never import this into a Client Component.
 */
export function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !key) {
    throw new Error('Supabase credentials not configured')
  }

  return createClient(url, key, {
    auth: { persistSession: false },
  })
}

export type LeadStatus = 'pending' | 'contacted' | 'confirmed' | 'cancelled'

export interface Lead {
  id: number
  email: string
  phone: string
  name: string
  pickup_date: string | null
  pickup_location: string | null
  return_location: string | null
  car_type: string | null
  preferred_model: string | null
  status: LeadStatus
  source: string | null
  created_at: string
  updated_at: string
}
