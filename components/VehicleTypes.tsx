'use client'

import { useState } from 'react'
import { OptimizedImage } from './OptimizedImage'
import { useLanguage } from '@/contexts/LanguageContext'
import { FadeInSection } from './FadeInSection'

interface VehicleTypeItem {
  id: string
  key: string
  image: string
}

const vehicleTypeItems: VehicleTypeItem[] = [
  { id: 'pickup', key: 'pickup', image: '/images/vehicle-types/pickup.png' },
  { id: 'suv', key: 'suv', image: '/images/vehicle-types/suv.png' },
  { id: 'minisuv', key: 'minisuv', image: '/images/vehicle-types/minisuv.png' },
  { id: 'sedan', key: 'sedan', image: '/images/vehicle-types/sedan.png' },
  { id: 'passengers', key: 'passengers', image: '/images/vehicle-types/passengers.png' },
  { id: 'frigorifico', key: 'frigorifico', image: '/images/vehicle-types/frigorifico.png' },
  { id: 'carga', key: 'carga', image: '/images/vehicle-types/carga.jpg' },
]

export function VehicleTypes() {
  const { t } = useLanguage()
  const [index, setIndex] = useState(0)

  const total = vehicleTypeItems.length
  const item = vehicleTypeItems[index]
  const name = t(`vehicleTypes.${item.key}.name`)

  const goPrev = () => setIndex((i) => (i - 1 + total) % total)
  const goNext = () => setIndex((i) => (i + 1) % total)

  return (
    <section id="vehicle-types" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t('vehicleTypes.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('vehicleTypes.subtitle')}
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delayMs={150}>
          <div className="relative">
            <div key={item.id} className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden bg-white dark:bg-gray-900 shadow-md animate-fade-slide-in">
              <OptimizedImage
                src={item.image}
                alt={name}
                width={800}
                height={500}
                lazy={false}
                className="w-full h-full"
                objectFit="contain"
              />

              <button
                type="button"
                onClick={goPrev}
                aria-label="Anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-900/80 flex items-center justify-center shadow hover:bg-white dark:hover:bg-gray-900 hover:scale-110 transition-all"
              >
                <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                type="button"
                onClick={goNext}
                aria-label="Seguinte"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-900/80 flex items-center justify-center shadow hover:bg-white dark:hover:bg-gray-900 hover:scale-110 transition-all"
              >
                <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {vehicleTypeItems.map((v, i) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Ir para ${t(`vehicleTypes.${v.key}.name`)}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === index ? 'bg-blue-600 scale-125' : 'bg-gray-300 dark:bg-gray-700 hover:bg-blue-400'
                  }`}
                />
              ))}
            </div>

            <div key={`text-${item.id}`} className="text-center mt-8 animate-fade-slide-in">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                {name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto mb-6">
                {t(`vehicleTypes.${item.key}.description`)}
              </p>
              <a
                href="#contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 px-10 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
              >
                {t('vehicleTypes.cta')}
              </a>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
