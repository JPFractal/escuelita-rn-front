import { API_DIRECTORY } from "@/constraints/Api-Directory";
import { RegisterTalentDto } from "@/types/Dtos/RegisterTalentDto";
import { RegisterTalent } from "@/zodSchemas/registerSchema";

export const REQ_TALENTS = () => {
  return fetch(API_DIRECTORY.TALENTS.src, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const POST_TALENT = (talent: RegisterTalent) => {
  let formData = new FormData();
  const {imageUrl, ...registerTalentDto} = talent;
  formData.append("file", talent.imageUrl)
  formData.append("talent", JSON.stringify(registerTalentDto))
  return fetch(API_DIRECTORY.TALENTS.register.src, {
    method: "POST",
    body: formData
  });
}

