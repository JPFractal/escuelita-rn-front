import { TalentFull } from "@/types/Talent";
import Typography from "@/components/common/Typography";
import Badge from "@/components/common/Badge";
import OrganizationCard from "@/mainComponents/Cards/OrganizationCard";
import AddIcon from "@/components/common/Icon/icons/add";
import Experience from "@/types/Experience";
import ListContainer from "@/components/common/Container/List";

export default function TalentProfileOrganizations({
  title = "",
  items = [],
}: {
  title?: string;
  items: Array<Experience>;
}) {
  return (
    <section className="col-span-12 ">
      <ListContainer name={title}>
        {items.map((item) => (
          <OrganizationCard key={item.id} experience={item} />
        ))}
      </ListContainer>
    </section>
  );
}
