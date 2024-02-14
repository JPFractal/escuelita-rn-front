import CustomFieldSetRadio from "@/components/common/Container/CustomFieldSetRadio";
import TextField from "@/components/common/TextField";
import { TalentFull } from "@/types/Talent";

export default function EditSalary({ talent }: { talent: TalentFull }) {
  return (
    <div className="grid grid-cols-12 gap-4">
      <CustomFieldSetRadio
        className="col-span-12"
        name="nationalCurrency"
        itemDefault={talent.national_currency}
        items={[
          {
            label: "Soles",
            value: "soles",
          },
          {
            label: "Dólares",
            value: "dolares",
          },
        ]}
      />
      <TextField
        className="col-span-6"
        defaultValue={talent.salary_min}
        name="salary_min"
        placeholder="ej. 2000"
        label="Monto inicial"
        type="number"
      />
      <TextField
        defaultValue={talent.salary_max}
        name="salary_max"
        className="col-span-6"
        placeholder="ej. 5000"
        label="Monto final"
        type="number"
      />
    </div>
  );
}
