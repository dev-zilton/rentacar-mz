'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

/**
 * FAQ Section - Accordion pattern
 *
 * Performance optimizations:
 * - Lazy render - only expand on click
 * - Single state for all FAQs
 * - No animations that cause repaints
 * - Pure CSS for transitions
 */

const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8']

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { t } = useLanguage()

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="space-y-4">
          {faqKeys.map((key, index) => (
            <div key={key} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-left">
                  {t(`faq.${key}`)}
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {t(`faq.a${key.slice(1)}`)}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-12 bg-blue-50 dark:bg-blue-950/40 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {t('faq.notFoundTitle')}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {t('faq.notFoundSubtitle')}
          </p>
          <a
            href="mailto:reservas@eliterent.co.mz"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            {t('faq.contactSupport')}
          </a>
        </div>
      </div>
    </section>
  )
}
