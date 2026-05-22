"use client";

import { getTranslations } from "@/lib/i18n";
import { useLocale } from "@/components/LocaleProvider";

type FestivalItem = {
  time: string;
  name: string;
  type: string;
  actor: string;
};

type Props = {
  items: FestivalItem[];
  title: string;
};

const typeIcons: Record<string, string> = {
  "Musikk": "🎵",
  "Musikk og dans": "🎶",
  "Musikk (rap)": "🎤",
  "Tale": "🎤",
  "Pantomime": "🎭",
  "Samtale": "💬",
  "Sketsj": "🎭",
  "Sang": "🎵",
};

export default function FestivalProgram({ items, title }: Props) {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  const getTypeIcon = (type: string): string => {
    for (const [key, icon] of Object.entries(typeIcons)) {
      if (type.startsWith(key)) return icon;
    }
    return "🎪";
  };

  return (
    <>
      <h1 style={{ marginBottom: "0.5em" }}>{title}</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.5em",
          marginTop: "2em",
        }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: "var(--background-secondary)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "1.5em",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              transition: "all 0.2s ease",
              cursor: "default",
              display: "flex",
              flexDirection: "column",
              gap: "0.75em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "0.75em",
              }}
            >
              <span
                style={{
                  fontSize: "1.6em",
                  fontWeight: "700",
                  color: "var(--accent)",
                  minWidth: "70px",
                }}
              >
                {item.time}
              </span>
              <span
                style={{
                  fontSize: "0.85em",
                  backgroundColor: "transparent",
                  color: "var(--accent)",
                  border: "1.5px solid var(--accent)",
                  padding: "0.25em 0.6em",
                  borderRadius: "20px",
                  fontWeight: "600",
                  whiteSpace: "nowrap",
                }}
              >
                {getTypeIcon(item.type)} {item.type}
              </span>
            </div>

            {item.name && (
              <h3
                style={{
                  margin: "0.5em 0 0 0",
                  fontSize: "1.1em",
                  fontWeight: "600",
                  color: "var(--text)",
                }}
              >
                {item.name}
              </h3>
            )}

            <p
              style={{
                margin: "0.5em 0 0 0",
                fontSize: "0.9em",
                color: "var(--muted)",
                lineHeight: "1.4",
              }}
            >
              {item.actor}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
