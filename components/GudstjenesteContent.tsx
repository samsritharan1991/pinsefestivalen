"use client";

import Link from "next/link";
import { getTranslations } from "@/lib/i18n";
import { useLocale } from "@/components/LocaleProvider";
import type { Service, ServiceItem } from "@/lib/content";

type Props = { service: Service };

export default function GudstjenesteContent({ service }: Props) {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  const renderItem = (item: ServiceItem, idx: number) => {
    const linkStyle = { fontWeight: "500", color: "var(--accent)", textDecoration: "none" };

    switch (item.type) {
      case "heading":
        return (
          <h2 key={`heading-${idx}`} style={{ marginTop: "1.5em" }}>
            <Link href={`/programpunkt/${item.slug}`} style={linkStyle}>
              {item.title}
            </Link>
          </h2>
        );
      case "text":
        const prevTextItem = service.items[idx - 1];
        const isIndentedText =
          prevTextItem && prevTextItem.type === "text" && prevTextItem.content === "Kollekt";
        return (
          <p key={`text-${idx}`} style={{ marginBottom: "0.5em", marginLeft: isIndentedText ? "1.5em" : "0" }}>
            <Link href={`/programpunkt/${item.slug}`} style={linkStyle}>
              {item.content}
            </Link>
          </p>
        );
      case "list":
        return (
          <ul key={`list-${idx}`} style={{ marginBottom: "0.5em" }}>
            {item.items.map((listItem, listIdx) => (
              <li key={`${idx}-${listIdx}`}>
                <Link href={`/programpunkt/${item.slug}`} style={linkStyle}>
                  {listItem}
                </Link>
              </li>
            ))}
          </ul>
        );
      case "song":
        return (
          <div key={`song-${idx}`} style={{ marginBottom: "0.8em" }}>
            <Link href={`/programpunkt/${item.slug}`} style={linkStyle}>
              {item.title ?? item.slug.replaceAll("-", " ")}
            </Link>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <h1>{t.gudstjeneste.title}</h1>
      {service.date && <p style={{ color: "var(--muted)" }}>{service.date}</p>}

      <div style={{ marginTop: "2em" }}>
        {service.items.map((item, idx) => renderItem(item, idx))}
      </div>
    </>
  );
}
