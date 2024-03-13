import Select from "@/components/common/Select.tsx";
import useTalents from "@/hooks/useTalents";
import { getErrorMessage } from "@/utils/get-message-errors";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

export default function FormFieldsProfile() {
    const {
        register,
        setValue,
        formState: { errors },
    } = useFormContext();

    const { metadata } = useTalents();
    return (
        <Select
            className="col-span-12"
            name="perfil"
            label="Perfil"
            placeholder="Perfil técnico"
            fullwidth
            options={metadata?.technicalProfiles}
            inputProps={register("talentProfileId")}
            {...getErrorMessage(errors, "talentProfileId")}
        />
    )
}