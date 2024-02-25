import TextField from "@/components/common/TextField";
import { useFormContext } from "react-hook-form";
import { VALIDATORS_LOGIN } from "../form-validations/login";
import { getMessageErrors } from "@/utils/get-message-errors";

export default function FormFieldsLogin() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <TextField
        label="Usuario"
        placeholder="Nombre de usuario"
        inputProps={register("username", VALIDATORS_LOGIN.username)}
        {...getMessageErrors(errors, "username")}
      />
      <TextField
        label="Contraseña"
        placeholder="Contraseña"
        type="password"
        inputProps={register("password", VALIDATORS_LOGIN.password)}
        {...getMessageErrors(errors, "password")}
      />
    </>
  );
}
