import DateFieldInterval from "@/components/DateFieldInterval";
import TextField from "@/components/common/TextField";
import TextFieldAndCheckbox from "@/components/common/TextField/TextFieldAndCheckbox";
import Experience from "@/types/Experience";
import dateParser from "@/utils/date-parser";

export default function FormFieldsOrganizationTraining({
  experience,
}: {
  experience?: Experience;
}) {
  return (
    <div className="w-full grid grid-cols-12 gap-4">
      <TextFieldAndCheckbox
        className="col-span-12"
        label="Institución"
        placeholder="Nombre de la institución"
        checkboxLabel="Aquí en Fractal"
        name="organization"
        value={experience?.organization.name}
        alternative="FRACTAL"
      />
      <TextField
        label="Carrera"
        placeholder="Nombre de la carrera"
        name="position"
        defaultValue={experience?.position}
        className="col-span-12"
      />
      <TextField
        label="Grado"
        placeholder="Grado de la carrera"
        name="grade"
        defaultValue={experience?.grade}
        className="col-span-12"
      />
      <DateFieldInterval
        className="col-span-12"
        labelFirstInput="Año y mes de inicio"
        labelSecondInput="Año y mes fin"
        nameFirstInput="start_date"
        nameSecondInput="end_date"
        valueFirstInput={experience && dateParser(experience?.start_date)}
        valueSecondInput={experience && dateParser(experience?.end_date)}
        checkboxLabel="Hasta la actualidad"
        alternative=""
      />
    </div>
  );
}
