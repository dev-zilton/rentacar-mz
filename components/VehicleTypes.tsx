'use client'

import { useLanguage } from '@/contexts/LanguageContext'

/**
 * Vehicle Types Section - Catalog of vehicles by body type
 *
 * Complements the Fleet section (which is organized by price tier).
 * This section helps visitors who already know which type of vehicle
 * they need (Pick-up, SUV, Sedan, etc.) find it quickly.
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

function CarIcon() {
  return (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l1.5-4.5A2 2 0 018.4 7h7.2a2 2 0 011.9 1.5L19 13m-14 0h14m-14 0a1.5 1.5 0 00-1.5 1.5V17a1 1 0 001 1h1a1 1 0 001-1v-.5m11 .5V17a1 1 0 001 1h1a1 1 0 001-1v-2.5a1.5 1.5 0 00-1.5-1.5M8 17h8"
      />
    </svg>
  )
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
          {vehicleTypeItems.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <CarIcon />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {t(`vehicleTypes.${item.key}.name`)}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t(`vehicleTypes.${item.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
