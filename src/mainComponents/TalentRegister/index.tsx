"use client";
import Button from "@/components/common/Button";
import UploadCard from "@/components/common/Card/UploadCard";
import Paper from "@/components/common/Container/Paper/intex";
import SectionContainer from "@/components/common/Container/SectionContainer";
import AddIcon from "@/components/common/Icon/icons/add";
import Typography from "@/components/common/Typography";
import FormContextProvider from "@/context/form-context";
import FormFieldsExperienceLabor from "@/forms/form-fields/experience-labor";
import FormFieldsExperienceTraining from "@/forms/form-fields/experience-training";
import FormFieldsLanguage from "@/forms/form-fields/language";
import FormFieldsSalary from "@/forms/form-fields/salary";
import FormFieldsSkill from "@/forms/form-fields/skill";
import FormFieldsSocialNetworks from "@/forms/form-fields/social-networks";
import {
  RegisterTalent,
  RegisterTalentSchema,
  regiterTalentDefaultValues,
} from "@/zodSchemas/registerSchema";
import { useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormFieldsNames from "@/forms/form-fields/names";
export default function TalentRegister({
  className,
  style,
}: {
  className?: string;
  style: any;
}) {
  const { formState, getValues, ...res } = useForm({
    resolver: zodResolver(RegisterTalentSchema),
    defaultValues: regiterTalentDefaultValues,
  });

  async function handleSubmit(data: RegisterTalent) {
    console.log("onSubmit");
    console.log(data);
  }
  return (
    <FormContextProvider
      onSubmit={handleSubmit}
      externalMethods={{
        formState,
        getValues,
        ...res,
      }}
    >
      <Paper className="w-[606px] custom-shadow border-[1px] border-gray-30 flex flex-col gap-5">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <Typography variant="title">Nuevo talento</Typography>
            <Typography>
              Detalla al nuevo talento que deseas agregar.
            </Typography>
          </div>
          <div className="flex gap-2">
            <Button variant="outlined" color="sky" href="/" className="h-fit">
              Volver
            </Button>
            <Button className="h-fit" type="submit">
              Guardar
            </Button>
          </div>
        </div>
        <div className={"flex flex-col gap-6 " + className} style={style}>
          <SectionContainer title="Datos del Talento">
            <FormFieldsNames />
          </SectionContainer>
          <SectionContainer title="Curriculum Vitae">
            <UploadCard
              className="p-8 border border-gray-35"
              title="Curriculum Vitae"
              subtitle="PDF (max. 800x400px)"
            />
          </SectionContainer>
          <SectionContainer title="Foto de perfil">
            <UploadCard
              className="p-8 border border-gray-35"
              title="Foto de perfil"
              subtitle="PNG o JPG (max. 800x400px)"
            />
          </SectionContainer>
          <SectionContainer title="Medios sociales">
            <FormFieldsSocialNetworks />
          </SectionContainer>
          <SectionContainer title="Banda salarial">
            <FormFieldsSalary />
          </SectionContainer>
          <SectionContainer title="Habilidades técnicas">
            <FormFieldsSkill tech />
            <Button
              StartIcon={<AddIcon />}
              variant="text"
              color="sky"
              className="w-fit"
            >
              Agregar más
            </Button>
          </SectionContainer>
          <SectionContainer title="Habilidades blandas">
            <FormFieldsSkill />
            <Button
              StartIcon={<AddIcon />}
              variant="text"
              color="sky"
              className="w-fit"
            >
              Agregar más
            </Button>
          </SectionContainer>
          <SectionContainer title="Experiencias laborales">
            <FormFieldsExperienceLabor />
          </SectionContainer>
          <SectionContainer title="Experiencias educativas">
            <FormFieldsExperienceTraining />
          </SectionContainer>
          <SectionContainer title="Idiomas">
            <FormFieldsLanguage />
          </SectionContainer>
        </div>
      </Paper>
    </FormContextProvider>
  );
}
