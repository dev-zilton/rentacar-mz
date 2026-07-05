'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export function AboutUs() {
  const { t, tList } = useLanguage()
  const values = tList('about.valuesList')

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">
              {t('about.missionTitle')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {t('about.missionText')}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">
              {t('about.visionTitle')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {t('about.visionText')}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">
              {t('about.valuesTitle')}
            </h3>
            <ul className="text-gray-600 dark:text-gray-400 space-y-1">
              {values.map((value, idx) => (
                <li key={idx}>{value}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            {t('about.statsTitle')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                {t('about.statYearsValue')}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                {t('about.statYearsLabel')}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                {t('about.statClientsValue')}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                {t('about.statClientsLabel')}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                {t('about.statCarsValue')}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                {t('about.statCarsLabel')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
