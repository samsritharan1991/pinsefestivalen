"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./TopBar.module.css";
import { requestWakeLock, releaseWakeLock } from "@/lib/wakeLock";
import { getTranslations, locales } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { useLocale } from "@/components/LocaleProvider";

export default function TopBar() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { locale, setLocale } = useLocale();
  const t = getTranslations(locale);

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    const init = (window as Window & { __INITIAL_THEME__?: string }).__INITIAL_THEME__;
    return (init === "dark" || init === "light" ? init : "light") as "light" | "dark";
  });

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as "light" | "dark" | null) ?? "light";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  useEffect(() => {
    const lang = searchParams.get("lang");
    if (lang && locales.includes(lang as Locale)) {
      setLocale(lang as Locale);
      if (pathname) router.replace(pathname);
    }
  }, [searchParams, pathname, setLocale, router]);

  useEffect(() => {
    requestWakeLock();
    const onVis = () => {
      if (document.visibilityState === "visible") requestWakeLock();
      else releaseWakeLock();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      document.removeEventListener("visibilitychange", onVis);
      releaseWakeLock();
    };
  }, []);

  const setThemeAndStore = (next: "light" | "dark") => {
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  const SunIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
  const MoonIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );

  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.title}>
          <Image
            src="/logo.webp"
            alt=""
            width={48}
            height={48}
            className={styles.logo}
          />
          <span className={styles.titleText}>{t.topbar.title}</span>
        </Link>
        <div className={styles.actions}>
          <div className={styles.langWrap} role="group" aria-label={t.topbar.languageLabel}>
            <select
              value={locale}
              onChange={(e) => {
                const next = e.target.value as Locale;
                if (locales.includes(next)) {
                  setLocale(next);
                  const url = pathname ? `${pathname}?lang=${next}` : `/?lang=${next}`;
                  router.push(url);
                }
              }}
              className={styles.langSelect}
              aria-label={t.topbar.languageLabel}
              title={t.topbar.languageLabel}
            >
              {locales.map((loc) => (
                <option key={loc} value={loc}>
                  {t.lang[loc as keyof typeof t.lang]}
                </option>
              ))}
            </select>
          </div>
          <div
            className={styles.themeToggle}
            role="group"
            aria-label={t.topbar.themeLabel}
            suppressHydrationWarning
          >
            <button
              type="button"
              className={theme === "light" ? styles.themeSegmentActive : styles.themeSegment}
              onClick={() => setThemeAndStore("light")}
              aria-label={t.topbar.light}
              aria-pressed={theme === "light"}
              title={t.topbar.light}
            >
              <SunIcon />
            </button>
            <button
              type="button"
              className={theme === "dark" ? styles.themeSegmentActive : styles.themeSegment}
              onClick={() => setThemeAndStore("dark")}
              aria-label={t.topbar.dark}
              aria-pressed={theme === "dark"}
              title={t.topbar.dark}
            >
              <MoonIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
