import { TalentFull } from "@/types/Talent";
import { RegisterTalent } from "@/zodSchemas/registerSchema";

export default function adapterTalent(talent: RegisterTalent): TalentFull { // Receives the model from backend and parses it to the frontend type
  return {
    id: talent.id,
    photo: talent.imageUrl ? "data:image/png;base64," + talent.imageUrl : undefined,
    name: talent.firstName + " " + talent.paternalSurname + " " + talent.maternalSurname,
    description: talent.description,
    roleId: talent.talentProfileId,
    rating: undefined,
    cityId: talent.cityId,
    countryId: talent.countryId,
    national_currency: undefined,
    salary_min: talent.initialAmount,
    salary_max: talent.finalAmount,
    cellphone: talent.cellphone,
    github_url: talent.githubUrl,
    linkedin_url: talent.linkedinUrl,
    selected: false,

    certificates: [],
    experiences: [],
    feedbacks: [],
    languages: [],
    soft_skills: [],
    tech_skills: [],

  };
}
/*
    "id": 2,
    "firstName": "Fabian",
    "paternalSurname": "Abad",
    "maternalSurname": "Andaluz",
    "imageUrl": "https://avatars.githubusercontent.com/u/89323601?v=4",
    "description": "Real Fullstack Wannabe",
    "talentProfileId": 2,
    "currencyTypeId": 1,
    "initialAmount": 2000,
    "finalAmount": 5000,
    "cellphone": "123456789",
    "linkedinUrl": "https://example.com",
    "githubUrl": "https://example.com",
    "countryId": 1,
    "cityId": 1,
    "createdAt": "2024-03-06"
*/