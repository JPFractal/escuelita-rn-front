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
import ConfirmActionModal from "@/components/common/ConfirmActionModal/indext";
import ModalADE from "@/components/ModalADE";
import { useForm } from "react-hook-form";
import { EXPERIENCE_FIELD_LIST } from "@/forms/form-validations/experience-training";
import useAuth from "@/hooks/useAuth";

export default function TalentProfileExperienceLabor({
  title = "",
  items = [],
}: {
  title?: string;
  items: Array<Experience>;
}) {
  const { isAdmin } = useAuth();
  const { flag: flagModal, on: onModal, off: offModal } = useToogle();
  const { flag: typeAction, on: isAdd, off: isEdit } = useToogle();
  const methods = useForm({ defaultValues: EXPERIENCE_FIELD_LIST });

  function addTrigger() {
    isAdd();
    onModal();
  }

  function editTrigger(item: Experience) {
    isEdit();
    onModal();
  }

  return (
    <section className="col-span-12 ">
      <ListContainer name={title} onAdd={addTrigger} control={isAdmin()}>
        {items.map((item: Experience) => (
          <ExperienceCard
            key={"experience-" + item.id}
            experience={item}
            onAction={() => editTrigger(item)}
            control={isAdmin()}
          />
        ))}
      </ListContainer>

      <ModalADE
        isAdd={typeAction}
        open={flagModal}
        onClose={offModal}
        addText={{
          title: "Agrega una nueva experiencia",
          subtitle: "Describe y agrega tu nueva experiencia laboral.",
        }}
        editText={{
          title: "Edita tu experiencia",
          subtitle:
            "La vida esta llena de cambios. Edita tu experiencia laboral.",
        }}
      >
        <FormFieldsOrganizationLabor />
      </ModalADE>
    </section>
  );
}
