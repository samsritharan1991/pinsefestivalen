"use client";

import Link from "next/link";
import { getTranslations } from "@/lib/i18n";
import { useLocale } from "@/components/LocaleProvider";

const linkStyle = {
  display: "block" as const,
  padding: "16px 20px",
  border: "1px solid var(--border)",
  background: "var(--card)",
  borderRadius: 12,
  color: "var(--fg)",
  textDecoration: "none" as const,
  fontSize: "1.1em",
};

export default function HomePage() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  return (
    <>
      <h1>{t.home.title}</h1>

      <nav style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 24 }}>
        <Link href="/gudstjeneste" style={linkStyle}>
          {t.home.menuService}
        </Link>
        <Link href="/festivalen" style={linkStyle}>
          {t.home.menuFestival}
        </Link>
      </nav>
    </>
  );
}
