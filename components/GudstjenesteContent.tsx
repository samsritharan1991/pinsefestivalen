"use client";

import Link from "next/link";
import { getTranslations } from "@/lib/i18n";
import { useLocale } from "@/components/LocaleProvider";
import type { Service, ServiceItem } from "@/lib/content";

type Props = { service: Service };

export default function GudstjenesteContent({ service }: Props) {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  const getIconAndColor = (type: ServiceItem["type"]) => {
    switch (type) {
      case "song":
        return { icon: "🎵", color: "#d97e3a" };
      case "heading":
        return { icon: "📖", color: "#666" };
      case "text":
        return { icon: "📝", color: "#555" };
      case "list":
        return { icon: "📋", color: "#666" };
      default:
        return { icon: "•", color: "#999" };
    }
  };

  const renderItem = (item: ServiceItem, idx: number) => {
    const { icon, color } = getIconAndColor(item.type);
    const linkStyle = { fontWeight: "500", color: "var(--accent)", textDecoration: "none" };

    switch (item.type) {
      case "heading":
        return (
          <h2 key={`heading-${idx}`} style={{ marginTop: "1.5em", marginBottom: "0.5em", color: color }}>
            <span style={{ marginRight: "0.5em" }}>{icon}</span>
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
          <p key={`text-${idx}`} style={{ marginBottom: "0.6em", marginLeft: isIndentedText ? "2em" : "0", display: "flex", alignItems: "center", gap: "0.5em" }}>
            <span style={{ color: color, flexShrink: 0 }}>{icon}</span>
            <Link href={`/programpunkt/${item.slug}`} style={linkStyle}>
              {item.content}
            </Link>
          </p>
        );
      case "list":
        return (
          <ul key={`list-${idx}`} style={{ marginBottom: "0.8em", marginLeft: "0" }}>
            {item.items.map((listItem, listIdx) => (
              <li key={`${idx}-${listIdx}`} style={{ display: "flex", alignItems: "center", gap: "0.5em", marginBottom: "0.3em" }}>
                <span style={{ color: color, flexShrink: 0 }}>{icon}</span>
                <Link href={`/programpunkt/${item.slug}`} style={linkStyle}>
                  {listItem}
                </Link>
              </li>
            ))}
          </ul>
        );
      case "song":
        return (
          <div key={`song-${idx}`} style={{ marginBottom: "1em", padding: "0.75em 0.75em", backgroundColor: "#f9f5f0", borderLeft: `4px solid ${color}`, display: "flex", alignItems: "center", gap: "0.75em" }}>
            <span style={{ color: color, fontSize: "1.2em", flexShrink: 0 }}>{icon}</span>
            <Link href={`/programpunkt/${item.slug}`} style={{ ...linkStyle, color: color }}>
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
