import useTalent from "@/hooks/useTalent";
import TalentProfileGeneralInfo from "./sections/general-info";
import TalentProfileSkills from "./sections/skills";
import Typography from "@/components/common/Typography";
import TalentProfileDescription from "./sections/description";
import TalentProfileOrganizations from "./sections/organizations";

export default function TalentProfile({ idTalent }: { idTalent: number }) {
  const { talent } = useTalent(idTalent);

  return (
    <article
      className="grid grid-cols-12 w-full gap-6 overflow-y-auto"
      style={{ maxHeight: "calc(100vh - 220px)" }}
    >
      <TalentProfileGeneralInfo talent={talent} />
      <TalentProfileSkills talent={talent} />
      <TalentProfileDescription talent={talent} />
      <TalentProfileOrganizations title="Experiencia" talent={talent} />
      <TalentProfileOrganizations title="Educación" talent={talent} />
    </article>
  );
}
