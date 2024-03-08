import { API_DIRECTORY } from "@/constraints/Api-Directory";

export const REQ_REGISTER_METADATA = () => {
  return fetch(API_DIRECTORY.METADATA.register.src);
};
