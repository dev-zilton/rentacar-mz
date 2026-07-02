-- Create leads table for car rental inquiries
CREATE TABLE IF NOT EXISTS leads (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  name VARCHAR(255) NOT NULL,
  pickup_date DATE,
  pickup_location VARCHAR(50),
  return_location VARCHAR(50),
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
