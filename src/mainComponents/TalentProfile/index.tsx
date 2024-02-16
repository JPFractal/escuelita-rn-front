import useTalent from "@/hooks/useTalent";
import TalentProfileGeneralInfo from "./sections/general-info";
import TalentProfileSkills from "./sections/skills";
import TalentProfileDescription from "./sections/description";
import TalentProfileFeedback from "./sections/feedback";
import TalentProfileCertificates from "./sections/certificates";
import TalentProfileOrganizationsTraining from "./sections/organization-training";
import TalentProfileOrganizationsLabor from "./sections/organization-labor";
import TalentProfileLanguages from "./sections/languages";

export default function TalentProfile({ idTalent }: { idTalent: number }) {
  const { talent } = useTalent(idTalent);

  return (
    <article
      className="grid grid-cols-12 w-full gap-6 overflow-y-auto pb-4 pr-4"
      style={{ maxHeight: "calc(100vh - 220px)" }}
    >
      <TalentProfileGeneralInfo talent={talent} />
      <TalentProfileCertificates items={talent.certificates} />
      <TalentProfileSkills talent={talent} />
      <TalentProfileDescription talent={talent} />
      <TalentProfileOrganizationsLabor
        title="Experiencia"
        items={talent.experiences.filter((exp) => exp.type === "work")}
      />
      <TalentProfileOrganizationsTraining
        title="Educación"
        items={talent.experiences.filter((exp) => exp.type === "school")}
      />
      <TalentProfileLanguages title="Idiomas" items={talent.languages} />
      <TalentProfileFeedback items={talent.feedbacks} />
    </article>
  );
}
