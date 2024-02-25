import CustomResponse from "@/types/request/response";

export default async function fetchTreament({
  request,
  redErrorMessage = "Error de red",
  reqErrorMessage = "Error durante petición",
}: {
  request: Promise<Response>;
  redErrorMessage?: string;
  reqErrorMessage?: string;
}): Promise<CustomResponse> {
  try {
    const res = await request;

    if (res.ok) return { ok: true, res };
    else return { ok: false, message: reqErrorMessage };
  } catch {
    return {
      ok: false,
      message: redErrorMessage,
    };
  }
}
