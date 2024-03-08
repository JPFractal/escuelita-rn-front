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
            label="Nombres"
            placeholder="Nombres del talento"
            inputProps={register("firstName")}
            {...getErrorMessage(errors, "firstName")}
          />
          <TextField
            fullwidth
            label="Apellido Paterno"
            placeholder="Primer apellido"
            inputProps={register("paternalSurname")}
            {...getErrorMessage(errors, "paternalSurname")}
          />
          <TextField
            fullwidth
            label="Apellido Materno"
            placeholder="Segundo Apellido"
            inputProps={register("maternalSurname")}
            {...getErrorMessage(errors, "maternalSurname")}
          />
        </div>
      );
}