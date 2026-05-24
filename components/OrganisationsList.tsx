"use client";

type Organisation = {
  name: string;
  category: string;
  description?: string;
};

type Props = {
  items: Organisation[];
  title: string;
};

const categoryIcons: Record<string, string> = {
  Kirke: "⛪",
  Menighet: "🙏",
  Organisasjon: "🤝",
  Ungdomsorganisasjon: "👥",
  Fellesskap: "👫",
};

function getCategoryIcon(category: string): string {
  for (const [key, icon] of Object.entries(categoryIcons)) {
    if (category.startsWith(key)) return icon;
  }
  return "✨";
}

export default function OrganisationsList({ items, title }: Props) {
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
                alignItems: "center",
                justifyContent: "space-between",
                gap: "0.75em",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: "1.1em",
                  fontWeight: "600",
                  color: "var(--text)",
                  flex: 1,
                }}
              >
                {item.name}
              </h3>
              <span
                style={{
                  fontSize: "0.85em",
                  backgroundColor: "transparent",
                  color: "#d97e3a",
                  border: "1.5px solid #d97e3a",
                  padding: "0.3em 0.65em",
                  borderRadius: "20px",
                  fontWeight: "600",
                  whiteSpace: "nowrap",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              >
                {getCategoryIcon(item.category)} {item.category}
              </span>
            </div>

            {item.description && (
              <p
                style={{
                  margin: "0.5em 0 0 0",
                  fontSize: "0.9em",
                  color: "var(--muted)",
                  lineHeight: "1.4",
                }}
              >
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
