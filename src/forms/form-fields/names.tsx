import TextField from "@/components/common/TextField";
import { getErrorMessage } from "@/utils/get-message-errors";
import { useFormContext } from "react-hook-form";


export default function FormFieldsNames() {
    const {
        register,
        formState: { errors },
      } = useFormContext();
    return (
        <div className="flex flex-col gap-4">
          <TextField
            fullwidth
            name="firstName"
            label="Nombres"
            placeholder="Nombres del talento"
            inputProps={register("firstName")}
            autoComplete="given-name"
            {...getErrorMessage(errors, "firstName")}
          />
          <TextField
            fullwidth
            name="paternalSurname"
            label="Apellido Paterno"
            placeholder="Primer apellido"
            autoComplete="family-name"
            inputProps={register("paternalSurname")}
            {...getErrorMessage(errors, "paternalSurname")}
          />
          <TextField
            fullwidth
            name="maternalSurname"
            label="Apellido Materno"
            placeholder="Segundo Apellido"
            autoComplete="family-name"
            inputProps={register("maternalSurname")}
            {...getErrorMessage(errors, "maternalSurname")}
          />
        </div>
      );
}