'use client'

import { useLanguage } from '@/contexts/LanguageContext'

/**
 * Vehicle Types Section - Catalog of vehicles by body type
 *
 * Complements the Fleet section (which is organized by price tier).
 * This section helps visitors who already know which type of vehicle
 * they need (Pick-up, SUV, Sedan, etc.) find it quickly.
 *
 * Each category has a distinct icon for quick visual scanning.
 */

interface VehicleTypeItem {
  id: string
  key: string
}

const vehicleTypeItems: VehicleTypeItem[] = [
  { id: 'pickup', key: 'pickup' },
  { id: 'suv', key: 'suv' },
  { id: 'minisuv', key: 'minisuv' },
  { id: 'sedan', key: 'sedan' },
  { id: 'passengers', key: 'passengers' },
]

function PickupIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 16.5V13a1 1 0 011-1h5V7a1 1 0 011-1h4.6a1 1 0 01.86.5L18 10h2a1 1 0 011 1v4.5M3 16.5a1.5 1.5 0 003 0M3 16.5H2m19 0a1.5 1.5 0 01-3 0m3 0h1m-4 0H9m0 0a1.5 1.5 0 01-3 0"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12V8h5.6" />
    </svg>
  )
}

function SuvIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16.5V12a2 2 0 01.5-1.3L6.5 8a2 2 0 011.6-.8h7.8a2 2 0 011.6.8l2 2.7a2 2 0 01.5 1.3v4.5M4 16.5a1.5 1.5 0 003 0M4 16.5H3m17 0a1.5 1.5 0 01-3 0m3 0h1m-4 0H7"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16" />
    </svg>
  )
}

function MiniSuvIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 16v-3.5a2 2 0 01.7-1.5l1.8-1.6A2 2 0 018.8 9h6.4a2 2 0 011.3.5l1.8 1.6a2 2 0 01.7 1.5V16M5 16a1.5 1.5 0 003 0M5 16H4m15 0a1.5 1.5 0 01-3 0m3 0h1m-4 0H8"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12.5h12" />
    </svg>
  )
}

function SedanIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 15.5V14a1.5 1.5 0 01.4-1l1.4-1.6.9-2.6A2 2 0 017.6 7.5h8.8a2 2 0 011.9 1.3l.9 2.6 1.4 1.6a1.5 1.5 0 01.4 1v1.5M3 15.5a1.5 1.5 0 003 0M3 15.5H2m19 0a1.5 1.5 0 01-3 0m3 0h1m-4 0H6"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.5 11h13" />
    </svg>
  )
}

function PassengersIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 16V11a2 2 0 012-2h14a2 2 0 012 2v5M3 16a1.5 1.5 0 003 0M3 16H2m19 0a1.5 1.5 0 01-3 0m3 0h1M5 9V6a1 1 0 011-1h12a1 1 0 011 1v3"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5v4M16 5v4M5 9h14" />
    </svg>
  )
}

const iconMap: Record<string, () => React.JSX.Element> = {
  pickup: PickupIcon,
  suv: SuvIcon,
  minisuv: MiniSuvIcon,
  sedan: SedanIcon,
  passengers: PassengersIcon,
}

export function VehicleTypes() {
  const { t } = useLanguage()

  return (
    <section id="vehicle-types" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('vehicleTypes.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('vehicleTypes.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {vehicleTypeItems.map((item) => {
            const Icon = iconMap[item.key]
            return (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Icon />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {t(`vehicleTypes.${item.key}.name`)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {t(`vehicleTypes.${item.key}.description`)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
