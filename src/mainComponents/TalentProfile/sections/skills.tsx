"use client";

import { TalentFull } from "@/types/Talent";
import Typography from "@/components/common/Typography";
import Badge from "@/components/common/Badge";
import ListContainer from "@/components/common/Container/List";
import Modal from "@/components/common/Modal";
import FormFieldsSkill from "@/forms/form-fields/skill";
import useToogle from "@/hooks/useToogle";
import ModalContent from "@/components/common/Container/ModalContent";
import useAuth from "@/hooks/useAuth";

export default function TalentProfileSkills({
  talent,
}: {
  talent: TalentFull;
}) {
  const { isAdmin } = useAuth();
  const { flag: tech, on: isTech, off: isSoft } = useToogle();
  const { flag: addFlag, on: addOn, off: addOff } = useToogle();

  const handleAdd = (type: boolean) => {
    if (type) isTech();
    else isSoft();
    addOn();
  };

  return (
    <section className="col-span-12 flex gap-4">
      <ListContainer
        name="Habilidades Técnicas"
        axis={0}
        mainContainerClass="w-3/5"
        onAdd={() => handleAdd(true)}
        control={isAdmin()}
      >
        {talent.tech_skills.map((skill) => (
          <Badge color="sky" key={skill.name}>
            {skill.name} - {skill.years}
          </Badge>
        ))}
      </ListContainer>
      <ListContainer
        name="Habilidades Blandas"
        axis={0}
        mainContainerClass="w-2/5"
        onAdd={() => handleAdd(false)}
        control={isAdmin()}
      >
        {talent.soft_skills.map((skill) => (
          <Badge color="pink" key={skill}>
            {skill}
          </Badge>
        ))}
      </ListContainer>

      <Modal open={addFlag} onClose={addOff}>
        <ModalContent
          onCancel={addOff}
          title={`Agrega una nueva habilidad ${tech ? "ténica" : "blanda"}`}
          subtitle={`Agrega tu nueva experiencia ${
            tech ? "ténica" : "blanda"
          }.`}
        >
          <FormFieldsSkill tech={tech} />
        </ModalContent>
      </Modal>
    </section>
  );
}
