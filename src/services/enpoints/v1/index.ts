let baseUrl = "";

const version = "v1/";

switch (process.env.NEXT_PUBLIC_WS_ENV) {
  case "prod":
    baseUrl = process.env.NEXT_PUBLIC_WS_PRD_URL || "";
    break;
  case "pre":
    baseUrl = process.env.NEXT_PUBLIC_WS_PP_URL || "";
    break;
  case "dev":
  default:
    baseUrl = process.env.NEXT_PUBLIC_WS_LOCAL_URL || "";
}

export const URL = baseUrl + version;
