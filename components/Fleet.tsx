'use client'

import { OptimizedImage } from './OptimizedImage'
import { useLanguage } from '@/contexts/LanguageContext'
import { FadeInSection } from './FadeInSection'

/**
 * Fleet Section - Showcase available vehicles
 *
 * Performance optimizations:
 * - Lazy loaded images (below the fold)
 * - Fixed aspect ratios to prevent CLS
 * - Minimal DOM nodes
 *
 * Pricing is in Mozambican Metical (MT), formatted with a thousands
 * separator (e.g. 3.500 MT), matching local conventions.
 */

interface CarTier {
  id: number
  nameKey: string
  descKey: string
  modelsKey: string
  featuresKey: string
  pricePerDay: number
  image: string
}

const cars: CarTier[] = [
  {
    id: 1,
    nameKey: 'fleet.economy',
    descKey: 'fleet.economyDesc',
    modelsKey: 'fleet.economyModels',
    featuresKey: 'fleet.economyFeatures',
    pricePerDay: 3500,
    image: '/images/car-economy.png',
  },
  {
    id: 2,
    nameKey: 'fleet.standard',
    descKey: 'fleet.standardDesc',
    modelsKey: 'fleet.standardModels',
    featuresKey: 'fleet.standardFeatures',
    pricePerDay: 5500,
    image: '/images/car-standard.png',
  },
  {
    id: 3,
    nameKey: 'fleet.suv',
    descKey: 'fleet.suvDesc',
    modelsKey: 'fleet.suvModels',
    featuresKey: 'fleet.suvFeatures',
    pricePerDay: 6500,
    image: '/images/car-suv.png',
  },
  {
    id: 4,
    nameKey: 'fleet.premium',
    descKey: 'fleet.premiumDesc',
    modelsKey: 'fleet.premiumModels',
    featuresKey: 'fleet.premiumFeatures',
    pricePerDay: 9000,
    image: '/images/car-premium.png',
  },
  {
    id: 5,
    nameKey: 'fleet.frigorifico',
    descKey: 'fleet.frigorificoDesc',
    modelsKey: 'fleet.frigorificoModels',
    featuresKey: 'fleet.frigorificoFeatures',
    pricePerDay: 9500,
    image: '/images/vehicle-types/frigorifico.png',
  },
  {
    id: 6,
    nameKey: 'fleet.carga',
    descKey: 'fleet.cargaDesc',
    modelsKey: 'fleet.cargaModels',
    featuresKey: 'fleet.cargaFeatures',
    pricePerDay: 8500,
    image: '/images/vehicle-types/carga.jpg',
  },
]

function formatMT(value: number): string {
  return new Intl.NumberFormat('pt-MZ').format(value)
}

export function Fleet() {
  const { t, tList } = useLanguage()

  return (
    <section id="fleet" className="py-20 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('fleet.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('fleet.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cars.map((car, idx) => {
            const features = tList(car.featuresKey)
            const name = t(car.nameKey)
            return (
              <FadeInSection key={car.id} delayMs={(idx % 4) * 100}>
                <div
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
                >
                  <div className="relative h-64 w-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
                    <div className="w-full h-full transition-transform duration-500 hover:scale-105">
                      <OptimizedImage
                        src={car.image}
                        alt={`${name} - ${t(car.descKey)}`}
                        width={400}
                        height={300}
                        lazy={true}
                        className="w-full h-full"
                      />
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                          {t(car.descKey)}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                      {t('fleet.modelsLabel')} {t(car.modelsKey)}
                    </p>

                    <ul className="space-y-2">
                      {features.map((feature, fIdx) => (
                        <li key={fIdx} className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="border-t dark:border-gray-700 pt-4 flex items-end justify-between mt-auto">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        {formatMT(car.pricePerDay)} MT
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        /{t('fleet.perDay')}
                      </span>
                    </div>

                    <a
                      href="#contact"
                      className="block text-center w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200"
                    >
                      {t('fleet.select')}
                    </a>
                  </div>
                </div>
              </FadeInSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
