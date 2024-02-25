import Button from "@/components/common/Button";
import UploadCard from "@/components/common/Card/UploadCard";
import SectionContainer from "@/components/common/Container/SectionContainer";
import AddIcon from "@/components/common/Icon/icons/add";
import FormContextProvider from "@/context/form-context";
import FormFieldsExperienceLabor from "@/forms/form-fields/experience-labor";
import FormFieldsExperienceTraining from "@/forms/form-fields/experience-training";
import FormFieldsLanguage from "@/forms/form-fields/language";
import FormFieldsSalary from "@/forms/form-fields/salary";
import FormFieldsSkill from "@/forms/form-fields/skill";
import FormFieldsSocialNetworks from "@/forms/form-fields/social-networks";

export default function TalentRegister({
  className,
  style,
}: {
  className?: string;
  style: any;
}) {
  return (
    <FormContextProvider>
      <div className={"flex flex-col gap-6 " + className} style={style}>
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
          <Button StartIcon={<AddIcon />} variant="text" color="sky" className="w-fit">
            Agregar más
          </Button>
        </SectionContainer>
        <SectionContainer title="Habilidades blandas">
          <FormFieldsSkill />
          <Button StartIcon={<AddIcon />} variant="text" color="sky" className="w-fit">
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
    </FormContextProvider>
  );
}
