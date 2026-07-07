'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { FadeInSection } from './FadeInSection'

interface ServiceItem {
  id: string
  titleKey: string
  descKey: string
  icon: 'ald' | 'fleet' | 'rac'
}

const services: ServiceItem[] = [
  { id: 'ald', titleKey: 'services.aldTitle', descKey: 'services.aldDesc', icon: 'ald' },
  { id: 'fleet', titleKey: 'services.fleetTitle', descKey: 'services.fleetDesc', icon: 'fleet' },
  { id: 'rac', titleKey: 'services.racTitle', descKey: 'services.racDesc', icon: 'rac' },
]

function ServiceIcon({ type }: { type: ServiceItem['icon'] }) {
  if (type === 'ald') {
    return (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  }
  if (type === 'fleet') {
    return (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7a2 2 0 012-2h2a2 2 0 012 2v10M9 17H5a2 2 0 01-2-2v-3a1 1 0 011-1h1M9 17h6m0 0h4a2 2 0 002-2v-3a1 1 0 00-1-1h-1" />
        <circle cx="7.5" cy="17.5" r="1.5" strokeWidth={2} />
        <circle cx="16.5" cy="17.5" r="1.5" strokeWidth={2} />
      </svg>
    )
  }
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <FadeInSection key={service.id} delayMs={idx * 120}>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 h-full flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white mb-5">
                  <ServiceIcon type={service.icon} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {t(service.titleKey)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                  {t(service.descKey)}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-block text-center w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-colors duration-200"
                >
                  {t('services.cta')}
                </a>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
