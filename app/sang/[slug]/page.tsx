import { getSongBySlug, getSongSlugs, getService, type Service } from "@/lib/content";
import SongContent from "@/components/SongContent";

export async function generateStaticParams() {
  return getSongSlugs().map((slug) => ({ slug }));
}

export default async function SongPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const song = await getSongBySlug(slug);

  const service = getService("today");
  type ServiceItem = Service["items"][number];
  const songSlugsInOrder = service.items
    .filter((i: ServiceItem) => i.type === "song")
    .map((i: ServiceItem) => i.slug);
  const idx = songSlugsInOrder.indexOf(song.slug);
  const prev = idx > 0 ? songSlugsInOrder[idx - 1] : null;
  const next =
    idx >= 0 && idx < songSlugsInOrder.length - 1
      ? songSlugsInOrder[idx + 1]
      : null;

  return <SongContent song={song} prev={prev} next={next} />;
}
