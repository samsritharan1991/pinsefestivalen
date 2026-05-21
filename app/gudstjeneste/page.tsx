import { getService, getSongBySlug } from "@/lib/content";
import GudstjenesteContent from "@/components/GudstjenesteContent";
import type { ServiceItem } from "@/lib/content";

export default async function ServicePage() {
  const service = getService("today");
  const itemsWithTitles: ServiceItem[] = await Promise.all(
    service.items.map(async (item) => {
      if (item.type === "song") {
        const song = await getSongBySlug(item.slug);
        return { ...item, title: song.title };
      }
      return item;
    })
  );
  return (
    <GudstjenesteContent
      service={{ ...service, items: itemsWithTitles }}
    />
  );
}
