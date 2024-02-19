import Experience from "@/types/Experience";
import ListContainer from "@/components/common/Container/List";
import Modal from "@/components/common/Modal";
import ModalContent from "@/components/common/Container/ModalContent";
import { useState } from "react";
import useToogle from "@/hooks/useToogle";
import TrashIcon from "@/components/common/Icon/icons/trash";
import { palette } from "@/themes/colors";
import FormFieldsOrganizationLabor from "@/forms/form-fields/experience-labor";
import ExperienceCard from "@/mainComponents/Cards/ExperienceCard";

export default function TalentProfileExperienceLabor({
  title = "",
  items = [],
}: {
  title?: string;
  items: Array<Experience>;
}) {
  const { flag: editFlag, on: editOn, off: editOff } = useToogle();
  const { flag: addFlag, on: addOn, off: addOff } = useToogle();
  const [organization, setOrganization] = useState<Experience>(items[0]);

  const handleEdit = (item: Experience) => {
    setOrganization(item);
    editOn();
  };

  return (
    <section className="col-span-12 ">
      <ListContainer name={title} onAdd={addOn}>
        {items.map((item: Experience) => (
          <ExperienceCard
            key={"experience-" + item.id}
            experience={item}
            onAction={() => handleEdit(item)}
          />
        ))}
      </ListContainer>

      <Modal open={editFlag} onClose={editOff}>
        <ModalContent
          onCancel={editOff}
          title="Edita tu experiencia"
          subtitle="La vida esta llena de cambios. Edita tu experiencia laboral."
          CloseButtonIcon={<TrashIcon color={palette.red[10]} />}
          confirmButtonText="Editar"
        >
          <FormFieldsOrganizationLabor experience={organization} />
        </ModalContent>
      </Modal>

      <Modal open={addFlag} onClose={addOff}>
        <ModalContent
          onCancel={addOff}
          title="Agrega una nueva experiencia"
          subtitle="Describe y agrega tu nueva experiencia laboral."
        >
          <FormFieldsOrganizationLabor />
        </ModalContent>
      </Modal>
    </section>
  );
}
