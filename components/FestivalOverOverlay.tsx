"use client";

import { getTranslations } from "@/lib/i18n";
import { useLocale } from "@/components/LocaleProvider";
import styles from "./FestivalOverOverlay.module.css";

export default function FestivalOverOverlay() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="festival-over-title">
      <div className={styles.card}>
        <h2 id="festival-over-title" className={styles.title}>
          {t.overlay.title}
        </h2>
        <p className={styles.message}>{t.overlay.message}</p>
      </div>
    </div>
  );
}
