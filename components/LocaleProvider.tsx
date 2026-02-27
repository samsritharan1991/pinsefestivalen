"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { Locale } from "@/lib/i18n";
import { defaultLocale, locales } from "@/lib/i18n";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
};

export type LocaleProviderProps = {
  children: React.ReactNode;
  initialLocale?: Locale;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

export function LocaleProvider({
  children,
  initialLocale = defaultLocale,
}: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    const stored =
      (typeof window !== "undefined" &&
        (window as Window & { __INITIAL_LOCALE__?: string }).__INITIAL_LOCALE__) ||
      (typeof window !== "undefined" ? localStorage.getItem("locale") : null);
    if (locales.includes(stored as Locale)) {
      setLocaleState(stored as Locale);
      document.cookie = `locale=${stored}; path=/; max-age=${LOCALE_COOKIE_MAX_AGE}; SameSite=Lax`;
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("locale", next);
      document.documentElement.lang = next;
      document.cookie = `locale=${next}; path=/; max-age=${LOCALE_COOKIE_MAX_AGE}; SameSite=Lax`;
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
