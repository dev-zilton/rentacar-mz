'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
      <button
        onClick={() => setLanguage('pt')}
        className={`px-3 py-1 rounded-md font-medium text-sm transition-colors duration-200 ${
          language === 'pt'
            ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm'
            : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
        }`}
        title="Português"
      >
        PT
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-md font-medium text-sm transition-colors duration-200 ${
          language === 'en'
            ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm'
            : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
        }`}
        title="English"
      >
        EN
      </button>
    </div>
  )
}
