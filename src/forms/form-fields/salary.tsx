import CustomFieldSetRadio from "@/components/common/Container/CustomFieldSetRadio";
import TextField from "@/components/common/TextField";
import useTalents from "@/hooks/useTalents";
import { TalentFull } from "@/types/Talent";
import { getErrorMessage } from "@/utils/get-message-errors";
import { useFormContext } from "react-hook-form";

export default function EditSalary({ talent }: { talent?: TalentFull }) {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();
  const { metadata } = useTalents(); 
  return (
    <div className="grid grid-cols-12 gap-4">
      <CustomFieldSetRadio
        className="col-span-12"
        name="nationalCurrency"
        itemDefault={talent?.national_currency}
        items={metadata?.currency}
        setValue={(val: any) => setValue("currencyTypeId", val, { shouldValidate: true })}
        {...getErrorMessage(errors, "currencyTypeId")}
      />
      <TextField
        className="col-span-6"
        defaultValue={talent?.salary_min}
        name="salary_min"
        placeholder="ej. 2000"
        label="Monto inicial"
        type="number"
        inputProps={register("initialAmount")}
        {...getErrorMessage(errors, "initialAmount")}
      />
      <TextField
        defaultValue={talent?.salary_max}
        name="salary_max"
        className="col-span-6"
        placeholder="ej. 5000"
        label="Monto final"
        type="number"
        inputProps={register("finalAmount")}
        {...getErrorMessage(errors, "finalAmount")}
      />
    </div>
  );
}
