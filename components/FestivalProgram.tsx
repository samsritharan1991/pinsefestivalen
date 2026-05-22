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

export default function FestivalProgram({ items, title }: Props) {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  return (
    <>
      <h1>{title}</h1>
      <div style={{ overflowX: "auto", marginTop: "2em", width: "100%" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "0.85em",
          }}
        >
          <thead>
            <tr
              style={{
                borderBottom: "2px solid var(--border)",
                backgroundColor: "var(--background-secondary)",
              }}
            >
              <th style={{ padding: "0.5em", textAlign: "left", fontWeight: "600", width: "60px" }}>
                Tid
              </th>
              <th style={{ padding: "0.5em", textAlign: "left", fontWeight: "600", width: "25%" }}>
                Program
              </th>
              <th style={{ padding: "0.5em", textAlign: "left", fontWeight: "600", width: "20%" }}>
                Type
              </th>
              <th style={{ padding: "0.5em", textAlign: "left", fontWeight: "600", flex: 1 }}>
                Aktør
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr
                key={idx}
                style={{
                  borderBottom: "1px solid var(--border)",
                  backgroundColor:
                    idx % 2 === 0 ? "var(--background)" : "var(--background-secondary)",
                }}
              >
                <td
                  style={{
                    padding: "0.5em",
                    fontWeight: "600",
                    width: "60px",
                    color: "var(--accent)",
                  }}
                >
                  {item.time}
                </td>
                <td style={{ padding: "0.5em", width: "25%" }}>{item.name}</td>
                <td style={{ padding: "0.5em", width: "20%", color: "var(--muted)" }}>
                  {item.type}
                </td>
                <td style={{ padding: "0.5em", color: "var(--muted)" }}>
                  {item.actor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
