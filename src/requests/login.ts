import { API_DIRECTORY } from "@/constraints/Api-Directory";
import { FIELD_TYPES_LOGIN } from "@/forms/form-validations/login";

export const REQ_LOGIN = (values: FIELD_TYPES_LOGIN) => {
  console.log(values);
  return fetch(API_DIRECTORY.LOGIN.src, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
