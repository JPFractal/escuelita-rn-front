import { metadata } from "@/app/(dashboard)/layout";
import Select from "@/components/common/Select.tsx";
import TextField from "@/components/common/TextField";
import { LANGUAGE_LEVELS } from "@/constraints/Values/language-levels";
import { LANGUAGE_OPTIONS } from "@/constraints/Values/language-options";
import useTalents from "@/hooks/useTalents";
import Language from "@/types/Language";
import { getErrorMessage } from "@/utils/get-message-errors";
import { useFormContext } from "react-hook-form";

export default function FormFieldsLanguage({
  language,
}: {
  language?: Language;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();


  const { metadata } = useTalents();
  return (
    <div className="w-full grid grid-cols-12 gap-4">
      <Select
        className="col-span-12"
        name="name"
        label="Idioma"
        placeholder="Nombre del idioma"
        fullwidth
        options={metadata?.languages}
        defaultValue={language?.name}
        inputProps={register("paternalSurname")}
        {...getErrorMessage(errors, "paternalSurname")}
      />
      <Select
        className="col-span-12"
        name="level"
        label="Nivel"
        placeholder="Nivel del idioma"
        fullwidth
        options={metadata?.languagesLevels}
        defaultValue={language?.level.toString()}
        inputProps={register("paternalSurname")}
        {...getErrorMessage(errors, "paternalSurname")}
      />
    </div>
  );
}
