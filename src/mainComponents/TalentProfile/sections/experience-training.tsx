import Experience from "@/types/Experience";
import ListContainer from "@/components/common/Container/List";
import ModalContent from "@/components/common/Container/ModalContent";
import Modal from "@/components/common/Modal";
import useToogle from "@/hooks/useToogle";
import { useCallback, useEffect, useState } from "react";
import TrashIcon from "@/components/common/Icon/icons/trash";
import { palette } from "@/themes/colors";
import { useForm } from "react-hook-form";
import { onSubmit, setValues } from "@/forms/form-actions/experience-training";
import { EXPERIENCE_FIELD_LIST } from "@/forms/form-validations/experience-training";
import FormFieldsExperienceTraining from "@/forms/form-fields/experience-training";
import FormContextProvider from "@/context/form-context";
import ExperienceCard from "@/mainComponents/Cards/ExperienceCard";
import ConfirmActionModal from "@/components/common/ConfirmActionModal/indext";

export default function TalentProfileExperienceTraining({
  title = "",
  items = [],
}: {
  title?: string;
  items: Array<Experience>;
}) {
  const { flag, on, off } = useToogle();
  const { flag: editForm, off: isAdd, on: isEdit } = useToogle();
  const { flag: action, on: actionDeleted, off: actionEdit } = useToogle();
  const {
    flag: confirmModal,
    off: closeConfirm,
    on: openConfirm,
  } = useToogle();

  const methods = useForm({ defaultValues: EXPERIENCE_FIELD_LIST });

  // prettier-ignore
  const handleAdd = () => { isAdd(); on(); };
  const handleModalEdit = (item: Experience) => {
    setValues({ experience: item, setter: methods.setValue });
    isEdit();
    on();
  };

  const onConfirm = useCallback(() => {
    if (action) console.log("element deleted", methods.getValues());
    else console.log("element edited", methods.getValues());
  }, [action]);

  const handleDelete = (item: any) => {
    actionDeleted();
    openConfirm();
  };

  const handleEdit = (item: any) => {
    actionEdit();
    openConfirm();
  };

  useEffect(methods.clearErrors, [flag]);

  return (
    <section className="col-span-12 ">
      <ListContainer name={title} onAdd={handleAdd}>
        {items.map((item) => (
          <ExperienceCard
            key={item.id}
            experience={item}
            onAction={() => handleModalEdit(item)}
          />
        ))}
      </ListContainer>

      <Modal open={flag} onClose={off}>
        <FormContextProvider externalMethods={methods} onSubmit={onSubmit}>
          <ModalContent
            onClose={() => handleDelete(methods.getValues())}
            onCancel={off}
            onConfirm={handleEdit}
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
            CloseButtonIcon={editForm && <TrashIcon color={palette.red[10]} />}
            confirmButtonText={editForm ? "Editar" : "Agregar"}
            confirmButtonType="submit"
          >
            <FormFieldsExperienceTraining />
          </ModalContent>
        </FormContextProvider>
      </Modal>

      <ConfirmActionModal
        open={confirmModal}
        onConfirm={onConfirm}
        onClose={closeConfirm}
      />
    </section>
  );
}
