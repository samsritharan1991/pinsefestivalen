import styles from "./FestivalProgram.module.css";

export type FestivalProgramItem = {
  time: string;
  name: string;
  type: string;
  actor: string;
};

type Props = {
  items: FestivalProgramItem[];
  title: string;
};

const typeIcons: Record<string, string> = {
  Musikk: "🎵",
  "Musikk og dans": "🎶",
  "Musikk (rap)": "🎤",
  Tale: "🎤",
  Pantomime: "🎭",
  Samtale: "💬",
  Sketsj: "🎭",
  Sang: "🎵",
};

function getTypeIcon(type: string): string {
  for (const [key, icon] of Object.entries(typeIcons)) {
    if (type.startsWith(key)) return icon;
  }
  return "🎪";
}

export default function FestivalProgram({ items, title }: Props) {
  return (
    <>
      <h1 style={{ marginBottom: "0.5em" }}>{title}</h1>

      <div className={styles.grid}>
        {items.map((item, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.header}>
              <span className={styles.time}>{item.time}</span>
              <span className={styles.typeBadge}>
                {getTypeIcon(item.type)} {item.type}
              </span>
            </div>

            {item.name && <h3 className={styles.name}>{item.name}</h3>}

            <p className={styles.actor}>{item.actor}</p>
          </div>
        ))}
      </div>
    </>
  );
}
