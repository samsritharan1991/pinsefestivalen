type Props = {
  author?: string;
  singers?: string;
};

export default function SongMetadata({ author, singers }: Props) {
  const lines = [singers, author].filter(Boolean);
  if (lines.length === 0) return null;

  return (
    <p className="song-meta">
      {lines.map((line) => (
        <span key={line}>{line}</span>
      ))}
    </p>
  );
}
