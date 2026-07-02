"use client";

import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Pricing Section - Transparent pricing information
 *
 * Performance optimizations:
 * - Pure HTML/CSS (no images)
 * - Minimal interactivity
 * - No layout shifts (fixed height cards)
 */

interface PricingTier {
  nameKey: string;
  descKey: string;
  priceKey: string;
  featureKeys: string[];
  highlighted?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    nameKey: "pricing.daily",
    descKey: "pricing.dailyDesc",
    priceKey: "pricing.seeRates",
    featureKeys: ["km", "insurance", "cancellation", "roadside"],
  },
  {
    nameKey: "pricing.weekly",
    descKey: "pricing.weeklyDesc",
    priceKey: "pricing.weeklyDiscount",
    featureKeys: ["km", "insurance", "cancellation", "roadside", "gps"],
    highlighted: true,
  },
  {
    nameKey: "pricing.monthly",
    descKey: "pricing.monthlyDesc",
    priceKey: "pricing.monthlyDiscount",
    featureKeys: [
      "km",
      "insurance",
      "cancellation",
      "roadside",
      "gps",
      "maintenance",
    ],
  },
];

export function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("pricing.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-8 transition-transform duration-300 ${
                tier.highlighted
                  ? "bg-linear-to-br from-blue-600 to-blue-700 text-white shadow-2xl scale-105"
                  : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700"
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{t(tier.nameKey)}</h3>
              <p
                className={`text-sm mb-4 ${
                  tier.highlighted
                    ? "text-blue-100"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                {t(tier.descKey)}
              </p>

              <div className="mb-6 min-h-12">
                <span className="text-4xl font-bold">{t(tier.priceKey)}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.featureKeys.map((featureKey) => (
                  <li key={featureKey} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{t(`pricing.features.${featureKey}`)}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  tier.highlighted
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {t("pricing.cta")}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 dark:text-gray-500 mt-8">
          {t("pricing.note")}
        </p>
      </div>
    </section>
  );
}
