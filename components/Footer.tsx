'use client'

import { useLanguage } from '@/contexts/LanguageContext'

/**
 * Footer Component - Minimal footer with links
 *
 * Performance optimizations:
 * - Pure HTML/CSS
 * - No images or external requests
 * - Minimal interactivity
 */

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white font-bold mb-4">{t('brand.name')}</h4>
            <p className="text-sm text-gray-400">
              {t('footer.aboutText')}
            </p>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#fleet" className="hover:text-blue-400 transition-colors">{t('nav.fleet')}</a></li>
              <li><a href="#pricing" className="hover:text-blue-400 transition-colors">{t('nav.pricing')}</a></li>
              <li><a href="#faq" className="hover:text-blue-400 transition-colors">{t('nav.faq')}</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">{t('footer.contactTitle')}</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+258841234567" className="hover:text-blue-400 transition-colors">+258 84 123 4567</a></li>
              <li><a href="mailto:reservas@eliterent.co.mz" className="hover:text-blue-400 transition-colors">reservas@eliterent.co.mz</a></li>
              <li className="text-gray-400">{t('footer.address')}</li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">{t('footer.legal')}</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">{t('footer.privacy')}</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">{t('footer.terms')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex items-center justify-between flex-col md:flex-row gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {t('brand.name')}. {t('footer.rights')}.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-blue-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-blue-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M16 11.37A4 4 0 1112.63 8A4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
              </svg>
            </a>
            <a href="https://wa.me/258841234567" aria-label="WhatsApp" className="text-gray-400 hover:text-blue-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.08c-.24.68-1.4 1.32-1.93 1.36-.5.05-1.02.24-3.4-.7-2.87-1.14-4.71-4.06-4.86-4.25-.14-.19-1.17-1.55-1.17-2.96s.73-2.1 1-2.39c.24-.26.53-.33.7-.33.18 0 .35 0 .5.01.16.01.38-.06.6.45.24.55.8 1.9.87 2.04.07.14.11.3.02.49-.09.19-.14.3-.28.46-.14.16-.29.36-.42.48-.14.13-.28.28-.12.55.16.27.71 1.16 1.52 1.88 1.05.93 1.93 1.22 2.2 1.36.27.14.43.11.59-.07.16-.18.68-.79.87-1.06.18-.27.36-.22.6-.13.24.09 1.53.72 1.79.85.27.14.44.2.5.31.07.12.07.68-.17 1.36z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
