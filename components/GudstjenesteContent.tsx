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
    switch (item.type) {
      case "heading":
        return (
          <h2 key={`heading-${idx}`} style={{ marginTop: "1.5em" }}>
            {item.title}
          </h2>
        );
      case "text":
        const prevTextItem = service.items[idx - 1];
        const isIndentedText =
          prevTextItem && prevTextItem.type === "text" && prevTextItem.content === "Kollekt";
        return (
          <p key={`text-${idx}`} style={{ marginBottom: "0.5em", marginLeft: isIndentedText ? "1.5em" : "0" }}>
            {item.content}
          </p>
        );
      case "list":
        return (
          <ul key={`list-${idx}`} style={{ marginBottom: "0.5em" }}>
            {item.items.map((listItem, listIdx) => (
              <li key={`${idx}-${listIdx}`}>{listItem}</li>
            ))}
          </ul>
        );
      case "song":
        return (
          <div key={`song-${idx}`} style={{ marginBottom: "0.8em" }}>
            <Link href={`/sang/${item.slug}`} style={{ fontWeight: "500" }}>
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
