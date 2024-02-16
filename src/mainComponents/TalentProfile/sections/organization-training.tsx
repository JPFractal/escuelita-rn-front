import OrganizationCard from "@/mainComponents/Cards/OrganizationCard";
import Experience from "@/types/Experience";
import ListContainer from "@/components/common/Container/List";
import ModalContent from "@/components/common/Container/ModalContent";
import Modal from "@/components/common/Modal";
import useToogle from "@/hooks/useToogle";
import { useState } from "react";
import TrashIcon from "@/components/common/Icon/icons/trash";
import FormFieldsOrganizationTraining from "../forms/organization-training";
import { palette } from "@/themes/colors";

export default function TalentProfileOrganizationsTraining({
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
        {items.map((item) => (
          <OrganizationCard
            key={item.id}
            experience={item}
            onAction={() => handleEdit(item)}
          />
        ))}
      </ListContainer>

      <Modal open={editFlag} onClose={editOff}>
        <ModalContent
          onCancel={editOff}
          title="Edita tu experiencia educativa"
          subtitle="La vida esta llena de cambios. Edita tu experiencia educativa."
          CloseButtonIcon={<TrashIcon color={palette.red[10]} size="xs" />}
        >
          <FormFieldsOrganizationTraining experience={organization} />
        </ModalContent>
      </Modal>

      <Modal open={addFlag} onClose={addOff}>
        <ModalContent
          onCancel={addOff}
          title="Agrega una nueva experiencia educativa"
          subtitle="Describe y agrega tu nueva experiencia educativa."
        >
          <FormFieldsOrganizationTraining />
        </ModalContent>
      </Modal>
    </section>
  );
}
