import { API_DIRECTORY } from "@/constraints/Api-Directory";
import { FIELD_TYPES_LOGIN } from "../form-validations/login";
import fetchTreament from "@/utils/fetch-treatment";
import CustomResponse from "@/types/request/response";
import { REQ_LOGIN } from "@/requests/login";

export async function onSubmitLogin(
  values: FIELD_TYPES_LOGIN
): Promise<CustomResponse> {
  const state = await fetchTreament({
    request: REQ_LOGIN(values),
    reqErrorMessage: "Credenciales incorrectas",
  });

  if (state.ok)
    return {
      ok: true,
      data: await state.res?.json(),
    };
  else return state;
}
