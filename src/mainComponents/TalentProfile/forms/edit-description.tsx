import TextArea from "@/components/common/TextArea";
import { TalentFull } from "@/types/Talent";

export default function FormFieldsDescription({
  talent,
}: {
  talent: TalentFull;
}) {
  return (
    <div className="flex w-full flex-col gap-4">
      <TextArea
        name={"description"}
        label={"Descripción"}
        placeholder={"Escribe una descripción"}
        defaultValue={talent.description}
      />
    </div>
  );
}
