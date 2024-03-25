import UploadCard from "@/components/common/Card/UploadCard";
import { getErrorMessage } from "@/utils/get-message-errors";
import { useFormContext } from "react-hook-form";

export default function FormFieldsImage() {
    const {
        setValue,
        formState: { errors },
    } = useFormContext();

    const handleChange = (e: any) => {
        setValue("imageUrl", e.target.files, {shouldValidate: true});
    }
    return (
    <UploadCard
        className="p-8 border border-gray-35"
        title="Foto de perfil"
        subtitle="PNG o JPG (max. 800x400px)"
        name="user-image"
        accept=".jpg, .jpeg, .png"
        onChange={(e: any) => {handleChange(e)}}
        {...getErrorMessage(errors, "imageUrl")}
    />
    );
}