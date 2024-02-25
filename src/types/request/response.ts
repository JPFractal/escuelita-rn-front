export default interface CustomResponse {
  ok: boolean;
  message?: string;
  res?: Response;
  data?: any;
}
