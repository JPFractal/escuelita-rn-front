import Certificate from "./Certificate";
import Experience from "./Experience";
import Feedback from "./Feedback";
import Language from "./Language";
import Skill from "./Skill";

export default interface Talent {
  id?: number;
  photo?: string;
  name?: string;
  roleId: number;
  rating?: number;
  cityId: number;
  countryId: number;
  salary_min?: number;
  salary_max?: number;
  cellphone?: string;
  selected?: boolean;
  national_currency?: number;
}

export interface TalentFull extends Talent {
  description: string;
  tech_skills: Array<Skill>;
  soft_skills: Array<string>;
  languages: Array<Language>;
  feedbacks: Array<Feedback>;
  certificates: Array<Certificate>
  experiences: Array<Experience>;
  github_url?: string;
  linkedin_url?: string;
}
