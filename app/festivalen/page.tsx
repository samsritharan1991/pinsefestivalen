import { getService } from "@/lib/content";
import FestivalProgram from "@/components/FestivalProgram";

export default async function FestivalenPage() {
  const service = getService("festival");

  return (
    <FestivalProgram
      items={service.items as any}
      title={service.title}
    />
  );
}
