import { getService } from "@/lib/content";
import OrganisationsList from "@/components/OrganisationsList";

export default async function OrganisasjonerPage() {
  const service = getService("organisations");

  return (
    <OrganisationsList
      items={service.items as any}
      title={service.title}
    />
  );
}
