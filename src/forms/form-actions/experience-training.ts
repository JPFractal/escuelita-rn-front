import Experience from "@/types/Experience";
import { FormAdapter } from "../form-adapter/experience";

export function onSubmit(values: any) {
  console.log(values);
}

export function setValues({
  experience,
  setter = () => {},
}: {
  experience: Experience;
  setter: any;
}) {
  const { id, organization, position, grade, start_date, end_date } =
    FormAdapter(experience);

  setter("id", id);
  setter("organization", organization);
  setter("position", position);
  setter("grade", grade);
  setter("start_date", start_date);
  setter("end_date", end_date);
}
