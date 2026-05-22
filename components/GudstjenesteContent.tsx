"use client";

import Link from "next/link";
import { getTranslations } from "@/lib/i18n";
import { useLocale } from "@/components/LocaleProvider";
import type { Service, ServiceItem } from "@/lib/content";

type Props = { service: Service };

export default function GudstjenesteContent({ service }: Props) {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  const getIconAndColor = (item: ServiceItem) => {
    const defaultIcons = {
      song: { icon: "🎵", color: "#d97e3a" },
      heading: { icon: "📖", color: "#666" },
      text: { icon: "📝", color: "#555" },
      list: { icon: "📋", color: "#666" },
    };

    const typeDefault = defaultIcons[item.type] || { icon: "•", color: "#999" };

    return {
      icon: item.icon ?? typeDefault.icon,
      color: typeDefault.color,
    };
  };

  const renderItem = (item: ServiceItem, idx: number) => {
    const { icon, color } = getIconAndColor(item);
    const boxStyle = { marginBottom: "0.8em", padding: "0.75em", backgroundColor: "#f9f5f0", borderLeft: `4px solid ${color}`, display: "flex", alignItems: "center", gap: "0.75em", fontWeight: "500", textDecoration: "none", color: color };

    switch (item.type) {
      case "heading":
        return (
          <Link key={`heading-${idx}`} href={`/programpunkt/${item.slug}`} style={boxStyle}>
            <span style={{ color: color, fontSize: "1.2em", flexShrink: 0 }}>{icon}</span>
            {item.title}
          </Link>
        );
      case "text":
        const prevTextItem = service.items[idx - 1];
        const isIndentedText =
          prevTextItem && prevTextItem.type === "text" && prevTextItem.content === "Kollekt";
        return (
          <Link key={`text-${idx}`} href={`/programpunkt/${item.slug}`} style={{ ...boxStyle, marginLeft: isIndentedText ? "1.5em" : "0" }}>
            <span style={{ color: color, fontSize: "1.2em", flexShrink: 0 }}>{icon}</span>
            {item.content}
          </Link>
        );
      case "list":
        return (
          <Link key={`list-${idx}`} href={`/programpunkt/${item.slug}`} style={boxStyle}>
            <span style={{ color: color, fontSize: "1.2em", flexShrink: 0 }}>{icon}</span>
            <ul style={{ margin: "0", padding: "0", listStyle: "none" }}>
              {item.items.map((listItem, listIdx) => (
                <li key={`${idx}-${listIdx}`} style={{ marginBottom: listIdx < item.items.length - 1 ? "0.3em" : "0" }}>
                  {listItem}
                </li>
              ))}
            </ul>
          </Link>
        );
      case "song":
        return (
          <Link key={`song-${idx}`} href={`/programpunkt/${item.slug}`} style={boxStyle}>
            <span style={{ color: color, fontSize: "1.2em", flexShrink: 0 }}>{icon}</span>
            {item.title ?? item.slug.replaceAll("-", " ")}
          </Link>
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
