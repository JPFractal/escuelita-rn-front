import fetchTreament from "@/utils/fetch-treatment";
import CustomResponse from "@/types/request/response";
import { RegisterTalent } from "@/zodSchemas/registerSchema";
import { POST_TALENT } from "@/requests/talents";

export async function onSubmitTalent(
  talent: RegisterTalent
): Promise<CustomResponse> {
  const state = await fetchTreament({
    request: POST_TALENT(talent),
    reqErrorMessage: "Error al guardar el talento",
  });
  if (state.ok)
    return {
      ok: true,
      data: await state.res?.json(),
    };
  else return state;
}
