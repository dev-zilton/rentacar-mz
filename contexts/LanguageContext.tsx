"use client";

import { createContext, useContext, useState, useEffect } from "react";
import {
  Language,
  translations,
  getTranslation,
  getTranslationList,
} from "@/lib/i18n";
import { LANGUAGE_STORAGE_KEY } from "@/lib/theme";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tList: (key: string) => string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");
  const [mounted, setMounted] = useState(false);

  // Initialize from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored === "pt" || stored === "en") {
      setLanguageState(stored);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  };

  const t = (key: string) => getTranslation(language, key);
  const tList = (key: string) => getTranslationList(language, key);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tList }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
