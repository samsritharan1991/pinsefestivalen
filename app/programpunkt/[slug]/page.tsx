import { getService, getServiceItemSlugs, getServiceItemBySlug, getSongBySlug, type Service } from "@/lib/content";
import ServiceItemContent from "@/components/ServiceItemContent";

export async function generateStaticParams() {
  return getServiceItemSlugs("today").map((slug) => ({ slug }));
}

export default async function ProgrampunktPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = await getServiceItemBySlug(slug, "today");

  let song = null;
  if (item.type === "song") {
    song = await getSongBySlug(item.slug);
  }

  const service = getService("today");
  type ServiceItem = Service["items"][number];
  const itemSlugsInOrder = service.items.map((i: ServiceItem) => i.slug);
  const idx = itemSlugsInOrder.indexOf(slug);
  const prev = idx > 0 ? itemSlugsInOrder[idx - 1] : null;
  const next = idx >= 0 && idx < itemSlugsInOrder.length - 1 ? itemSlugsInOrder[idx + 1] : null;

  return <ServiceItemContent item={item} prev={prev} next={next} song={song} />;
}
