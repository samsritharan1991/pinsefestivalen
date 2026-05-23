"use client";

import Image from "next/image";
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

const vippsLinkStyle = {
  display: "flex" as const,
  flexDirection: "column" as const,
  alignItems: "center" as const,
  justifyContent: "center" as const,
  gap: 8,
  padding: "22px 20px",
  background: "#ff5b24",
  border: "none",
  borderRadius: 12,
  color: "#fff",
  textDecoration: "none" as const,
  fontSize: "0.9em",
  fontWeight: 500,
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
        <Link
          href="https://qr.vipps.no/28/2/05/031/9FrRZBdzp"
          style={vippsLinkStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/vipps-logo.svg" alt="Vipps" width={104} height={26} />
          {t.home.menuKollekt}
        </Link>
      </nav>
    </>
  );
}
