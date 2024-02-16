import Experience from "./Experience";
import Feedback from "./Feedback";
import Language from "./Language";
import Skill from "./Skill";

export default interface Talent {
  photo?: string;
  name?: string;
  role?: string;
  rating?: number;
  city?: string;
  country?: string;
  salary_min?: number;
  salary_max?: number;
  selected?: boolean;
  national_currency?: number;
}

export interface TalentFull extends Talent {
  description: string;
  tech_skills: Array<Skill>;
  soft_skills: Array<string>;
  languages: Array<Language>;
  feedbacks: Array<Feedback>;
  experiences: Array<Experience>;
  github_url?: string;
  linkedin_url?: string;
}
