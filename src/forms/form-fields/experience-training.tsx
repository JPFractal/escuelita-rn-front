"use client";

import DateFieldInterval from "@/components/DateFieldInterval";
import TextField from "@/components/common/TextField";
import TextFieldAndCheckbox from "@/components/common/TextField/TextFieldAndCheckbox";
import { useFormContext } from "react-hook-form";
import { EXPERIENCE_VALIDATORS } from "../form-validations/experience-training";
import { getMessageErrors } from "../form-validations/experience-training";

export default function FormFieldsExperienceTraining() {
  const {
    register,
    formState: { errors },
    setValue,
    clearErrors,
    getValues,
  } = useFormContext();

  return (
    <div className="w-full grid grid-cols-12 gap-4">
      <TextField className="hidden" inputProps={register("id")} />
      <TextFieldAndCheckbox
        className="col-span-12"
        label="Institución"
        placeholder="Nombre de la institución"
        checkboxLabel="Aquí en Fractal"
        alternative="FRACTAL"
        inputProps={register(
          "organization",
          EXPERIENCE_VALIDATORS.organization
        )}
        useFormIntegration={{ setValue, clearErrors, getValues }}
        {...getMessageErrors(errors, "organization")}
      />
      <TextField
        label="Carrera"
        placeholder="Nombre de la carrera"
        className="col-span-12"
        inputProps={register("position", EXPERIENCE_VALIDATORS.position)}
        {...getMessageErrors(errors, "position")}
      />
      <TextField
        label="Grado"
        placeholder="Grado de la carrera"
        className="col-span-12"
        inputProps={register("grade", EXPERIENCE_VALIDATORS.grade)}
        {...getMessageErrors(errors, "grade")}
      />
      <DateFieldInterval
        className="col-span-12"
        labelFirstInput="Año y mes de inicio"
        labelSecondInput="Año y mes fin"
        checkboxLabel="Hasta la actualidad"
        firstInputProps={register(
          "start_date",
          EXPERIENCE_VALIDATORS.start_date
        )}
        secondInputProps={register("end_date", EXPERIENCE_VALIDATORS.end_date)}
        firstDateFieldProps={{ ...getMessageErrors(errors, "start_date") }}
        secondDateFieldProps={{ ...getMessageErrors(errors, "end_date") }}
      />
    </div>
  );
}
