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
import FormFieldsNames from "@/forms/form-fields/names";
import FormFieldsCountry from "@/forms/form-fields/country";
import FormFieldsCurriculum from "@/forms/form-fields/curriculum";
import FormFieldsImage from "@/forms/form-fields/image";
import FormFieldsDescription from "@/forms/form-fields/description";
import FormFieldsProfile from "@/forms/form-fields/profile";
import FormFieldsCellphone from "@/forms/form-fields/cellphone";
import Loader from "@/components/common/Loader/loader";
import {
  RegisterTalent,
  RegisterTalentSchema,
  regiterTalentDefaultValues,
} from "@/zodSchemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useTalents from "@/hooks/useTalents";
import { useRouter } from 'next/navigation'


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

  const { postTalent } = useTalents();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter()

  async function handleSubmit(data: RegisterTalent) {
    console.log(data)
    //setLoading(true);
    //await postTalent(data)
    //router.push("/")
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
        {loading ? 
        <div className="w-full flex justify-center">
          <Loader text="Guardando..."/>
        </div>
        :
        <>
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
            <FormFieldsCurriculum />
          </SectionContainer>
          <SectionContainer title="Foto de perfil">
            <FormFieldsImage />
          </SectionContainer>
          <SectionContainer title="Perfil del talento">
            <FormFieldsProfile />
          </SectionContainer>
          <SectionContainer title="Descripción">
            <FormFieldsDescription />
          </SectionContainer>
          <SectionContainer title="Medios sociales">
            <FormFieldsSocialNetworks />
          </SectionContainer>
          <SectionContainer title="Banda salarial">
            <FormFieldsSalary />
          </SectionContainer>
          <SectionContainer title="Número de celular">
            <FormFieldsCellphone />
          </SectionContainer>
          <SectionContainer title="Habilidades técnicas">
            <FormFieldsSkill tech />
          </SectionContainer>
          <SectionContainer title="Habilidades blandas">
            <FormFieldsSkill />
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
          <SectionContainer title="Residencia">
            <FormFieldsCountry />
          </SectionContainer>
        </div>
        </>
        }
      </Paper>
    </FormContextProvider>
  );
}
