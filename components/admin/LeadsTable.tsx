'use client'

import { useState } from 'react'
import type { Lead, LeadStatus } from '@/lib/supabase-admin'

const STATUS_OPTIONS: { value: LeadStatus; label: string; color: string }[] = [
  { value: 'pending', label: 'Pendente', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300' },
  { value: 'contacted', label: 'Contactado', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300' },
  { value: 'confirmed', label: 'Confirmado', color: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300' },
  { value: 'cancelled', label: 'Cancelado', color: 'bg-danger-100 text-danger-800 dark:bg-danger-900/40 dark:text-danger-300' },
]

function statusStyle(status: LeadStatus) {
  return STATUS_OPTIONS.find((s) => s.value === status)?.color || STATUS_OPTIONS[0].color
}

const CAR_TYPE_LABELS: Record<string, string> = {
  economy: 'Económico',
  standard: 'Standard',
  suv: 'SUV de Luxo',
  premium: 'Premium',
  frigorifico: 'Camião Frigorífico',
  carga: 'Camião de Carga',
}

function carTypeLabel(carType: string | null): string {
  if (!carType) return '-'
  return CAR_TYPE_LABELS[carType] || carType
}

export function LeadsTable({ initialLeads }: { initialLeads: Lead[] }) {
  const [leads, setLeads] = useState(initialLeads)
  const [updatingId, setUpdatingId] = useState<number | null>(null)

  const updateStatus = async (id: number, status: LeadStatus) => {
    setUpdatingId(id)
    const previous = leads
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)))

    try {
      const res = await fetch(`/api/admin/leads/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      })

      if (!res.ok) {
        setLeads(previous)
      }
    } catch {
      setLeads(previous)
    } finally {
      setUpdatingId(null)
    }
  }

  if (leads.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl p-10 text-center text-gray-500 dark:text-gray-400">
        Ainda não há reservas.
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400">
            <tr>
              <th className="text-left px-4 py-3 font-medium">Nome</th>
              <th className="text-left px-4 py-3 font-medium">Contacto</th>
              <th className="text-left px-4 py-3 font-medium">Data</th>
              <th className="text-left px-4 py-3 font-medium">Levantamento</th>
              <th className="text-left px-4 py-3 font-medium">Devolução</th>
              <th className="text-left px-4 py-3 font-medium">Categoria</th>
              <th className="text-left px-4 py-3 font-medium">Modelo</th>
              <th className="text-left px-4 py-3 font-medium">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {leads.map((lead) => (
              <tr key={lead.id} className="text-gray-900 dark:text-gray-100">
                <td className="px-4 py-3 font-medium whitespace-nowrap">{lead.name}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div>{lead.email}</div>
                  <div className="text-gray-500 dark:text-gray-400">{lead.phone}</div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">{lead.pickup_date || '-'}</td>
                <td className="px-4 py-3 whitespace-nowrap">{lead.pickup_location || '-'}</td>
                <td className="px-4 py-3 whitespace-nowrap">{lead.return_location || '-'}</td>
                <td className="px-4 py-3 whitespace-nowrap">{carTypeLabel(lead.car_type)}</td>
                <td className="px-4 py-3 whitespace-nowrap">{lead.preferred_model || '-'}</td>
                <td className="px-4 py-3">
                  <select
                    value={lead.status || 'pending'}
                    disabled={updatingId === lead.id}
                    onChange={(e) => updateStatus(lead.id, e.target.value as LeadStatus)}
                    className={`text-xs font-medium rounded-full px-3 py-1.5 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 ${statusStyle(lead.status || 'pending')}`}
                  >
                    {STATUS_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
