import UploadCard from "@/components/common/Card/UploadCard";
import { getErrorMessage } from "@/utils/get-message-errors";
import { useCallback, useState } from "react";
import { useFormContext } from "react-hook-form";

export default function FormFieldsImage() {
    const {
        setValue,
        register,
        formState: { errors },
    } = useFormContext();

    const exm = register("imageUrl")
    const handleChange = (e: any) => {
        setValue("imageUrl", e.target.files, {shouldValidate: true});
    }
    return (
    <UploadCard
        className="p-8 border border-gray-35"
        title="Foto de perfil"
        subtitle="PNG o JPG (max. 800x400px)"
        onChange={(e: any) => {handleChange(e); exm.onChange(e)}}
        {...getErrorMessage(errors, "imageUrl")}
    />
    );
}