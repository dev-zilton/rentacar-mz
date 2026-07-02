"use client";

import { OptimizedImage } from "./OptimizedImage";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Hero Section - Above the fold content
 *
 * Optimization for LCP:
 * - Hero image is priority (eager loading)
 * - Minimal layout shift (aspect ratio defined)
 * - Content loads synchronously
 * - CTA button is visible without interaction
 */
export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden bg-linear-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      {/* Background blur effect */}
      <div className="absolute inset-0 opacity-20 dark:opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 dark:bg-blue-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300 dark:bg-blue-700 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-600">
              {t("hero.title")}
            </span>
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-md leading-relaxed">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-center"
            >
              {t("hero.cta")}
            </a>
            <a
              href="#fleet"
              className="border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-center"
            >
              {t("hero.viewFleet")}
            </a>
          </div>

          {/* Trust Signals */}
          <div className="flex gap-8 pt-8 text-sm text-gray-600 dark:text-gray-400">
            <div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {t("hero.stat1Value")}
              </div>
              <div>{t("hero.stat1Label")}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {t("hero.stat2Value")}
              </div>
              <div>{t("hero.stat2Label")}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {t("hero.stat3Value")}
              </div>
              <div>{t("hero.stat3Label")}</div>
            </div>
          </div>
        </div>

        {/* Hero Image - Priority loading for LCP */}
        <div className="relative">
          <OptimizedImage
            src="/images/hero-rentacar.png"
            alt="Sedan de luxo premium - EliteRent Moçambique"
            width={500}
            height={400}
            priority={true}
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
