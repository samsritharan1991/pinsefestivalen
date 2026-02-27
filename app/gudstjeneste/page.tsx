import { getService, getSongBySlug } from "@/lib/content";
import GudstjenesteContent from "@/components/GudstjenesteContent";

export default async function ServicePage() {
  const service = getService("today");
  const itemsWithTitles = await Promise.all(
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
