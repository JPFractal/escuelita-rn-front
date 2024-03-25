import UploadCard from "@/components/common/Card/UploadCard";
import { getErrorMessage } from "@/utils/get-message-errors";
import { useFormContext } from "react-hook-form";

export default function FormFieldsCurriculum() {
  const {
    setValue,
    formState: { errors },
} = useFormContext();

  const handleChange = (e: any) => {
    setValue("curriculum", e.target.files, {shouldValidate: true});
  }
  return (
    <UploadCard 
      className="p-8 border border-gray-35" 
      title="Curriculum Vitae"
      subtitle="PDF (max. 800x400px)"
      accept=".pdf" 
      name="certificate"
      onChange={(e: any) => {handleChange(e)}}
      {...getErrorMessage(errors, "curriculum")}
      />
  );
}
