# Supabase Setup Instructions

This landing page uses Supabase to store car rental leads. Follow these steps to set up the database.

## 1. Create the Leads Table

Go to your Supabase project dashboard and run the SQL script:

```sql
-- Create leads table for car rental inquiries
CREATE TABLE IF NOT EXISTS leads (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  name VARCHAR(255) NOT NULL,
  pickup_date DATE,
  car_type VARCHAR(50),
  source VARCHAR(50) DEFAULT 'landing_page',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for quick lookups
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);

-- Enable RLS (Row Level Security)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert leads (anonymous inserts)
CREATE POLICY "Allow anonymous inserts"
  ON leads
  FOR INSERT
  WITH CHECK (true);

-- Allow only authenticated users to read leads
CREATE POLICY "Allow authenticated users to read all leads"
  ON leads
  FOR SELECT
  USING (auth.role() = 'authenticated');
```

## 2. Configure Environment Variables

Ensure these environment variables are set in your Vercel project:

- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key (for server-side API)

## 3. Test the Contact Form

1. Start the development server: `pnpm dev`
2. Navigate to the Contact Form section
3. Fill out the form and click "Book Now"
4. Check your Supabase `leads` table to confirm the data was saved

## Performance Notes

The landing page is optimized for Core Web Vitals:

- **LCP (Largest Contentful Paint)**: Hero image is priority loaded
- **INP (Interaction to Next Paint)**: Minimal JavaScript, debounced scroll handlers
- **CLS (Cumulative Layout Shift)**: All images have fixed aspect ratios

## Database Optimization

- Indexes on `email` and `created_at` for fast queries
- RLS policies for security
- Automatic timestamps for tracking
