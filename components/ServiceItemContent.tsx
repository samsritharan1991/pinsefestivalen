"use client";

import Link from "next/link";
import { ServiceItem } from "@/lib/content";

type Props = {
  item: ServiceItem;
  prev: string | null;
  next: string | null;
};

function linkStyle(enabled: boolean) {
  return {
    padding: "0.5em 1em",
    borderRadius: "0.25em",
    background: "#d97e3a",
    color: "white",
    textDecoration: "none",
    opacity: enabled ? 1 : 0.45,
    pointerEvents: enabled ? "auto" : "none",
    display: "inline-block",
  } as const;
}

export default function ServiceItemContent({ item, prev, next }: Props) {
  const getItemTitle = (item: ServiceItem): string => {
    if (item.type === "song") return item.title ?? item.slug;
    if (item.type === "heading") return item.title;
    if (item.type === "text") return item.content;
    if (item.type === "list") return "Liste";
    return "Element";
  };

  const getItemContent = (item: ServiceItem): React.ReactNode => {
    if (item.type === "song") {
      return <p style={{ color: "var(--muted)" }}>Sangen er lastet fra {item.slug}</p>;
    }
    if (item.type === "heading") {
      return <p style={{ color: "var(--muted)" }}>Overskrift</p>;
    }
    if (item.type === "text") {
      return <p>{item.content}</p>;
    }
    if (item.type === "list") {
      return (
        <ul>
          {item.items.map((listItem, idx) => (
            <li key={idx}>{listItem}</li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ flex: 1 }}>
        <h1>{getItemTitle(item)}</h1>
        <div style={{ marginTop: "2em" }}>{getItemContent(item)}</div>
      </div>

      <div style={{ marginTop: "3em", display: "flex", gap: "1em", justifyContent: "space-between", paddingBottom: "2em" }}>
        <Link href={prev ? `/programpunkt/${prev}` : "#"} style={linkStyle(!!prev)} aria-disabled={!prev}>
          ← Forrige
        </Link>
        <Link href="/gudstjeneste" style={linkStyle(true)}>
          Tilbake til program
        </Link>
        <Link href={next ? `/programpunkt/${next}` : "#"} style={linkStyle(!!next)} aria-disabled={!next}>
          Neste →
        </Link>
      </div>
    </div>
  );
}
