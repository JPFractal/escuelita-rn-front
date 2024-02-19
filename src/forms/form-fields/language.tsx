import Select from "@/components/common/Select.tsx";
import TextField from "@/components/common/TextField";
import { LANGUAGE_LEVELS } from "@/constraints/Values/language-levels";
import { LANGUAGE_OPTIONS } from "@/constraints/Values/language-options";
import Language from "@/types/Language";

export default function FormFieldsLanguage({
  language,
}: {
  language?: Language;
}) {
  return (
    <div className="w-full grid grid-cols-12 gap-4">
      <Select
        className="col-span-12"
        name="name"
        label="Idioma"
        placeholder="Nombre del idioma"
        fullwidth
        options={LANGUAGE_OPTIONS}
        defaultValue={language?.name}
      />
      <Select
        className="col-span-12"
        name="level"
        label="Nivel"
        placeholder="Nivel del idioma"
        fullwidth
        options={LANGUAGE_LEVELS}
        defaultValue={language?.level}
      />
    </div>
  );
}
