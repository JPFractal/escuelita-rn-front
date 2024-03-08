"use client";

import useTalents from "@/hooks/useTalents";
import TalentProfileGeneralInfo from "./sections/general-info";
import TalentProfileSkills from "./sections/skills";
import TalentProfileDescription from "./sections/description";
import TalentProfileFeedback from "./sections/feedback";
import TalentProfileCertificates from "./sections/certificates";
import TalentProfileLanguages from "./sections/languages";
import TalentProfileExperienceTraining from "./sections/experience-training";
import TalentProfileExperienceLabor from "./sections/experience-labor";

export default function TalentProfile({ idTalent }: { idTalent: number }) {
  const { selectedTalent } = useTalents();
  return (
    <article
      className="grid grid-cols-12 w-full gap-6 overflow-y-auto pb-4 pr-4"
      style={{ maxHeight: "calc(100vh - 220px)" }}
    >
      <TalentProfileGeneralInfo talent={selectedTalent} />
      <TalentProfileCertificates items={selectedTalent.certificates} />
      <TalentProfileSkills talent={selectedTalent} />
      <TalentProfileDescription talent={selectedTalent} />
      <TalentProfileExperienceLabor
        title="Experiencia"
        items={selectedTalent.experiences.filter((exp) => exp.type === "work")}
      />
      <TalentProfileExperienceTraining
        title="Educación"
        items={selectedTalent.experiences.filter((exp) => exp.type === "school")}
      />
      <TalentProfileLanguages title="Idiomas" items={selectedTalent.languages} />
      <TalentProfileFeedback items={selectedTalent.feedbacks} />
    </article>
  );
}
