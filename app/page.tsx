"use client";

import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "@/lib/i18n";
import { useLocale } from "@/components/LocaleProvider";

const navButtonBase = {
  display: "flex" as const,
  alignItems: "center" as const,
  justifyContent: "center" as const,
  padding: "22px 20px",
  borderRadius: 12,
  textDecoration: "none" as const,
  minHeight: 96,
};

const linkStyle = {
  ...navButtonBase,
  border: "1.5px solid #ff5b24",
  background: "var(--card)",
  color: "#ff5b24",
  fontSize: "1.1em",
};

const vippsLinkStyle = {
  ...navButtonBase,
  flexDirection: "column" as const,
  gap: 8,
  background: "#ff5b24",
  border: "none",
  color: "#fff",
  fontSize: "0.9em",
  fontWeight: 500,
};

const subtleButtonStyle = {
  ...navButtonBase,
  border: "none",
  background: "transparent",
  color: "var(--muted)",
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
        <Link
          href="https://qr.vipps.no/28/2/05/031/9FrRZBdzp"
          style={vippsLinkStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/vipps-logo.svg" alt="Vipps" width={104} height={26} />
          {t.home.menuKollekt}
        </Link>
        <Link href="/organisasjoner" style={subtleButtonStyle}>
          {t.home.menuOrganisations}
        </Link>
      </nav>
    </>
  );
}
