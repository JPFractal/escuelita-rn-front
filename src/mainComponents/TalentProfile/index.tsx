import useTalent from "@/hooks/useTalent";
import TalentProfileGeneralInfo from "./general-info";
import TalentProfileSkills from "./skills";

export default function TalentProfile({ idTalent }: { idTalent: number }) {
  const { talent } = useTalent(idTalent);

  return (
    <article className="grid grid-cols-12 w-full gap-6">
      <TalentProfileGeneralInfo talent={talent} />
      <TalentProfileSkills talent={talent} />
    </article>
  );
}
