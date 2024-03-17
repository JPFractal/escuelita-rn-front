import TextField from "@/components/common/TextField";
import { TalentFull } from "@/types/Talent";
import { getErrorMessage } from "@/utils/get-message-errors";
import { useFormContext } from "react-hook-form";

export default function FormFieldsCellphone({
  talent,
}: {
  talent?: TalentFull;
}) {

  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex w-full flex-col gap-4">
      <TextField
        type="number"
        name={"cellphone"}
        label={talent && "Número de Celular"}
        placeholder={"912345678"}
        defaultValue={talent?.cellphone}
        inputProps={register("cellphone")}
        {...getErrorMessage(errors, "cellphone")}
      />
    </div>
  );
}
