import Talent from "@/types/Talent";
import { RegisterTalent } from "@/zodSchemas/registerSchema";

export default function adapterTalent(talent: RegisterTalent): Talent { // Receives the model from backend and parses it to the frontend type
  return {
    photo: undefined,
    name: talent.firstName + " " + talent.paternalSurname + " " + talent.maternalSurname,
    role: undefined,
    rating: undefined,
    city: undefined,
    country: undefined,
    national_currency: undefined,
    salary_min: talent.initialAmount,
    salary_max: talent.finalAmount,
    cellphone: talent.cellphone,
    selected: false,
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