import { API_DIRECTORY } from "@/constraints/Api-Directory";

export const REQ_TALENTS = () => {
  return fetch(API_DIRECTORY.TALENTS.src, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
