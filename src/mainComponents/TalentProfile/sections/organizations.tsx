import { TalentFull } from "@/types/Talent";
import Typography from "@/components/common/Typography";
import Badge from "@/components/common/Badge";
import OrganizationCard from "@/mainComponents/Cards/OrganizationCard";
import AddIcon from "@/components/common/Icon/icons/add";

export default function TalentProfileOrganizations({
  title = "",
  talent,
}: {
  title?: string;
  talent: TalentFull;
}) {
  return (
    <section className="col-span-12 flex flex-col gap-2">
      <div className="relative">
        <Typography variant="support" className="font-bold">
          {title}
        </Typography>
        <AddIcon className="absolute bottom-1/2 translate-y-1/2 right-0" />
      </div>
      <div className="flex">
        <OrganizationCard />
      </div>
    </section>
  );
}
