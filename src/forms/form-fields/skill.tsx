import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import AddIcon from "@/components/common/Icon/icons/add";
import TextField from "@/components/common/TextField";
import Skill from "@/types/Skill";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

export default function FormFieldsSkill({ tech = false }: { tech?: boolean }) {
  const {
    setValue,
    register,
} = useFormContext();

  const [skillName, setSkillName] = useState<string>("");
  const [years, setYears] = useState<number>(0);
  const [skills, setSkills] = useState<Skill[]>([])

  const [nameError, setNameError] = useState<boolean>(false);
  const [helperTextName, setHelperTextName] = useState<string>("");
  const [yearsError, setYearsError] = useState<boolean>(false);
  const [helperTextyears, setHelperTextYears] = useState<string>("");
  const handleAddSkill = () => {
    if (!validateFields()) return

    let updatedSkills = [{
      name: skillName,
      years: years
    }, ...skills]
    if (tech) setValue("techSkills", updatedSkills)
    else setValue("softSkills", updatedSkills.map(techSkill => techSkill.name)) // parse to softSkill
    
    setSkills(updatedSkills)
    setSkillName("");
    setYears(0);
    
  }
  const validateFields = () : boolean => {
    setNameError(false);
    setHelperTextName("");
    setYearsError(false);
    setHelperTextYears("");

    if (skillName === "") {
      setNameError(true);
      setHelperTextName("El nombre de la habilidad no puede ser vacía");
      return false;
    }
    if (tech && !years) {
      setYearsError(true);
      setHelperTextYears("La cantidad de años no puede ser 0");
      return false;
    }
    return true;
  }
  return (
    <div className="w-full grid gap-4">
      <TextField
        className="col-span-12"
        label={`Habilidad ${tech ? "tecnica" : "blanda"}`}
        placeholder="Nombre de la habilidad"
        name="skillName"
        value={skillName}
        onChange={(e: any) => setSkillName(e.target.value)}
        onKeyDown={(e: any) => { if (e.key === "Enter") {e.preventDefault(); handleAddSkill()} }}
        error={nameError}
        helperText={helperTextName}
        autoComplete="off"
      />
      {tech && (
        <TextField
          type="number"
          className="col-span-12"
          label="Años de experiencia"
          placeholder="Nro. de años"
          name="years"
          value={years.toString()}
          onChange={(e: any) => setYears(parseInt(e.target.value))}
          onKeyDown={(e: any) => { if (e.key === "Enter") {e.preventDefault(); handleAddSkill()} }}
          error={yearsError}
          helperText={helperTextyears}
        />
      )}
      <div className="col-span-12 flex flex-wrap gap-2">
        {skills.map((skill, index) => 
        <Badge color={tech ? "sky" : "pink"} key={index}>
          {skill.name} {tech && "- " + skill.years}
        </Badge>
        )}
      </div>
      <Button
        StartIcon={<AddIcon />}
        variant="text"
        color="sky"
        className="w-fit"
        onClick={(e) => {e.preventDefault(); handleAddSkill()}}
      >
        Agregar
      </Button>
    </div>
  );
}
