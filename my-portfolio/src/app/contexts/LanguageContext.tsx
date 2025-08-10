"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../i18n/config";

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  availableLanguages: { code: string; name: string; flag: string }[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const availableLanguages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "ua", name: "Українська", flag: "🇺🇦" },
];

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const [language, setLanguageState] = useState("en");

  useEffect(() => {
    // Get language from localStorage or browser preference
    const savedLanguage = localStorage.getItem("language");
    const browserLanguage = navigator.language.split("-")[0];
    const defaultLanguage =
      savedLanguage ||
      availableLanguages.find((lang) => lang.code === browserLanguage)?.code ||
      "en";

    setLanguageState(defaultLanguage);
    i18n.changeLanguage(defaultLanguage);
  }, [i18n]);

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        availableLanguages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
