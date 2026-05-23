import { getService } from "@/lib/content";
import FestivalProgram, { type FestivalProgramItem } from "@/components/FestivalProgram";

export default async function FestivalenPage() {
  const service = getService("festival");

  return (
    <FestivalProgram
      items={service.items as unknown as FestivalProgramItem[]}
      title={service.title}
    />
  );
}
