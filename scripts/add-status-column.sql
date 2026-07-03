-- Migração: adiciona coluna de estado às reservas (para o painel /admin)
-- Já foi corrida directamente no SQL Editor do Supabase.
-- Este ficheiro fica só como registo/documentação.

ALTER TABLE leads
  ADD COLUMN IF NOT EXISTS status VARCHAR(20) NOT NULL DEFAULT 'pending';

ALTER TABLE leads
  DROP CONSTRAINT IF EXISTS leads_status_check;

ALTER TABLE leads
  ADD CONSTRAINT leads_status_check
  CHECK (status IN ('pending', 'contacted', 'confirmed', 'cancelled'));

CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
