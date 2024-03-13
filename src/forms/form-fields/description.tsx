import TextArea from "@/components/common/TextArea";
import { TalentFull } from "@/types/Talent";
import { getErrorMessage } from "@/utils/get-message-errors";
import { useFormContext } from "react-hook-form";

export default function FormFieldsDescription({
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
      <TextArea
        name={"description"}
        label={talent && "Descripción"}
        placeholder={"Escribe una descripción"}
        defaultValue={talent?.description}
        inputProps={register("description")}
        {...getErrorMessage(errors, "description")}
      />
    </div>
  );
}
