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
  const {
    imageUrl, 
    techSkills, 
    softSkills, 
    ...registerTalentDto} = talent;
  formData.append("file", imageUrl)
  formData.append("techSkills", JSON.stringify(techSkills))
  formData.append("softSkills", JSON.stringify(softSkills))
  formData.append("talent", JSON.stringify(registerTalentDto))
  return fetch(API_DIRECTORY.TALENTS.register.src, {
    method: "POST",
    body: formData
  });
}

