import { getSupabaseAdmin, type Lead } from '@/lib/supabase-admin'
import { LeadsTable } from '@/components/admin/LeadsTable'
import { LogoutButton } from '@/components/admin/LogoutButton'

export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  const supabase = getSupabaseAdmin()

  const { data: leads, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Reservas</h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
              Transporte&Logística K&K — Painel Admin
            </p>
          </div>
          <LogoutButton />
        </div>

        {error && (
          <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300 px-4 py-3 rounded-lg mb-6">
            Erro ao carregar reservas: {error.message}
          </div>
        )}

        <LeadsTable initialLeads={(leads as Lead[]) || []} />
      </div>
    </div>
  )
}
