"use client";

import { getTranslations } from "@/lib/i18n";
import { useLocale } from "@/components/LocaleProvider";

export default function FestivalenPage() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  return (
    <>
      <h1>{t.festivalen.title}</h1>
      <p style={{ color: "var(--muted)" }}>{t.festivalen.placeholder}</p>
    </>
  );
}
