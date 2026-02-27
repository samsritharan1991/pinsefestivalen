"use client";

import Link from "next/link";
import { getTranslations } from "@/lib/i18n";
import { useLocale } from "@/components/LocaleProvider";
import type { Song } from "@/lib/content";

type Props = {
  song: Song;
  prev: string | null;
  next: string | null;
};

const linkStyle = (enabled: boolean) => ({
  pointerEvents: enabled ? ("auto" as const) : ("none" as const),
  opacity: enabled ? 1 : 0.45,
  border: "1px solid var(--border)",
  background: "var(--card)",
  padding: "10px 12px",
  borderRadius: 12,
  color: "var(--fg)",
  textDecoration: "none" as const,
});

export default function SongContent({ song, prev, next }: Props) {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          margin: "16px 0 12px",
          alignItems: "center",
        }}
      >
        <Link href="/gudstjeneste" style={linkStyle(true)}>
          {t.song.backToService}
        </Link>
        <Link
          href={prev ? `/sang/${prev}` : "#"}
          aria-disabled={!prev}
          style={linkStyle(!!prev)}
        >
          {t.song.prev}
        </Link>
        <Link
          href={next ? `/sang/${next}` : "#"}
          aria-disabled={!next}
          style={linkStyle(!!next)}
        >
          {t.song.next}
        </Link>
      </div>
      <h1>{song.title}</h1>

      <article
        className="lyrics"
        dangerouslySetInnerHTML={{ __html: song.html }}
      />

      <hr />
      <p>
        <Link href="/gudstjeneste">{t.song.backToService}</Link>
      </p>
    </>
  );
}
