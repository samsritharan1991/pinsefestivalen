"use client";

import Link from "next/link";
import { getTranslations } from "@/lib/i18n";
import { useLocale } from "@/components/LocaleProvider";
import type { Service } from "@/lib/content";

type Props = { service: Service };

export default function GudstjenesteContent({ service }: Props) {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  return (
    <>
      <h1>{t.gudstjeneste.title}</h1>
      {service.date && <p style={{ color: "var(--muted)" }}>{service.date}</p>}

      <ol>
        {service.items.map((item, idx) => (
          <li key={`${item.slug}-${idx}`}>
            <Link href={`/sang/${item.slug}`}>
              {item.title ?? item.slug.replaceAll("-", " ")}
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}
