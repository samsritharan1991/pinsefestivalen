type Props = {
  title: string;
  titleTranslation?: string;
};

export default function SongHeading({ title, titleTranslation }: Props) {
  return (
    <>
      <h1>{title}</h1>
      {titleTranslation && (
        <p className="song-title-translation">{titleTranslation}</p>
      )}
    </>
  );
}
