import useTalent from "@/hooks/useTalent";
import TalentProfileGeneralInfo from "./sections/general-info";
import TalentProfileSkills from "./sections/skills";
import TalentProfileDescription from "./sections/description";
import TalentProfileOrganizations from "./sections/organizations";
import TalentProfileFeedback from "./sections/feedback";
import TalentProfileCertificates from "./sections/certificates";

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
      <TalentProfileOrganizations
        title="Experiencia"
        items={talent.experiences.filter((exp) => exp.type === "work")}
      />
      <TalentProfileOrganizations
        title="Educación"
        items={talent.experiences.filter((exp) => exp.type === "school")}
      />
      <TalentProfileFeedback items={talent.feedbacks} />
    </article>
  );
}
