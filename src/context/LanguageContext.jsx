/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useMemo, useState } from "react";

const DEFAULT_LANGUAGE = "en";
const LanguageContext = createContext();

function isSupportedLanguage(language) {
  return language === "it" || language === "en";
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") {
      return DEFAULT_LANGUAGE;
    }

    const savedLanguage = localStorage.getItem("language");
    return isSupportedLanguage(savedLanguage) ? savedLanguage : DEFAULT_LANGUAGE;
  });

  const value = useMemo(
    () => ({
      language,
      setLanguage: (nextLanguage) => {
        setLanguage((currentLanguage) => {
          const resolvedLanguage =
            typeof nextLanguage === "function"
              ? nextLanguage(currentLanguage)
              : nextLanguage;

          const safeLanguage = isSupportedLanguage(resolvedLanguage)
            ? resolvedLanguage
            : DEFAULT_LANGUAGE;

          if (typeof window !== "undefined") {
            localStorage.setItem("language", safeLanguage);
          }

          return safeLanguage;
        });
      },
      toggleLanguage: () =>
        setLanguage((currentLanguage) => {
          const nextLanguage = currentLanguage === "it" ? "en" : "it";

          if (typeof window !== "undefined") {
            localStorage.setItem("language", nextLanguage);
          }

          return nextLanguage;
        }),
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
