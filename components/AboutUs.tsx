'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { OptimizedImage } from './OptimizedImage'
import { FadeInSection } from './FadeInSection'

export function AboutUs() {
  const { t, tList } = useLanguage()
  const values = tList('about.valuesList')

  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-950">
      <div className="relative h-80 md:h-96 w-full overflow-hidden">
        <OptimizedImage
          src="/images/about/banner.jpg"
          alt="Interior de viatura premium"
          width={1600}
          height={700}
          lazy={true}
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('about.title')}
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

          <FadeInSection delayMs={0}>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 text-center h-full">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full border-2 border-blue-600 dark:border-blue-400 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m-4-4h8m6 0a10 10 0 11-20 0 10 10 0 0120 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                {t('about.missionTitle')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('about.missionText')}
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delayMs={120}>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 text-center h-full">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full border-2 border-blue-600 dark:border-blue-400 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                {t('about.visionTitle')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('about.visionText')}
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delayMs={240}>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 text-center h-full">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full border-2 border-blue-600 dark:border-blue-400 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                {t('about.valuesTitle')}
              </h3>
              <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                {values.map((value, idx) => (
                  <li key={idx} className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInSection>

        </div>

        <FadeInSection>
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
        </FadeInSection>
      </div>
    </section>
  )
}
