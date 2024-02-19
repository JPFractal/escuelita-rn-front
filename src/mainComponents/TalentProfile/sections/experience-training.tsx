import Experience from "@/types/Experience";
import ListContainer from "@/components/common/Container/List";
import ModalContent from "@/components/common/Container/ModalContent";
import Modal from "@/components/common/Modal";
import useToogle from "@/hooks/useToogle";
import { useEffect, useState } from "react";
import TrashIcon from "@/components/common/Icon/icons/trash";
import { palette } from "@/themes/colors";
import { useForm } from "react-hook-form";
import { onSubmit, setValues } from "@/forms/form-actions/experience-training";
import { FIELD_LIST } from "@/forms/form-validations/experience-training";
import FormFieldsExperienceTraining from "@/forms/form-fields/experience-training";
import FormContextProvider from "@/context/form-context";
import ExperienceCard from "@/mainComponents/Cards/ExperienceCard";

export default function TalentProfileExperienceTraining({
  title = "",
  items = [],
}: {
  title?: string;
  items: Array<Experience>;
}) {
  const { flag, on, off } = useToogle();
  const { flag: editForm, off: isAdd, on: isEdit } = useToogle();
  const methods = useForm({ defaultValues: FIELD_LIST });

  // prettier-ignore
  const handleAdd = () => { isAdd(); on(); };
  const handleEdit = (item: Experience) => {
    setValues({ experience: item, setter: methods.setValue });
    isEdit();
    on();
  };

  useEffect(methods.clearErrors, [flag]);

  return (
    <section className="col-span-12 ">
      <ListContainer name={title} onAdd={handleAdd}>
        {items.map((item) => (
          <ExperienceCard
            key={item.id}
            experience={item}
            onAction={() => handleEdit(item)}
          />
        ))}
      </ListContainer>

      <Modal open={flag} onClose={off}>
        <FormContextProvider
          externalMethods={methods}
          initConfig={{ defaultValues: FIELD_LIST }}
          onSubmit={onSubmit}
        >
          <ModalContent
            onCancel={off}
            title={
              editForm
                ? "Edita tu experiencia educativa"
                : "Agrega una nueva experiencia"
            }
            subtitle={
              editForm
                ? "La vida esta llena de cambios. Edita tu experiencia educativa."
                : "Describe y agrega tu nueva experiencia laboral."
            }
            // prettier-ignore
            CloseButtonIcon={editForm && <TrashIcon color={palette.red[10]} size="xs" />}
            confirmButtonText={editForm ? "Editar" : "Agregar"}
            confirmButtonType="submit"
          >
            <FormFieldsExperienceTraining />
          </ModalContent>
        </FormContextProvider>
      </Modal>
    </section>
  );
}
