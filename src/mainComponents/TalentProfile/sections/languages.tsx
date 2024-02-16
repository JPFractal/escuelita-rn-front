import ListContainer from "@/components/common/Container/List";
import Modal from "@/components/common/Modal";
import ModalContent from "@/components/common/Container/ModalContent";
import { useState } from "react";
import useToogle from "@/hooks/useToogle";
import TrashIcon from "@/components/common/Icon/icons/trash";
import { palette } from "@/themes/colors";
import LanguageCard from "@/mainComponents/Cards/LanguageCard";
import Language from "@/types/Language";
import FormFieldsLanguage from "../forms/language";

export default function TalentProfileLanguages({
  title = "",
  items = [],
}: {
  title?: string;
  items: Array<Language>;
}) {
  const { flag: editFlag, on: editOn, off: editOff } = useToogle();
  const { flag: addFlag, on: addOn, off: addOff } = useToogle();
  const [language, setLanguage] = useState<Language>(items[0]);

  const handleEdit = (item: Language) => {
    setLanguage(item);
    editOn();
  };

  return (
    <section className="col-span-12 ">
      <ListContainer name={title} onAdd={addOn}>
        {items.map((item: Language) => (
          <LanguageCard
            key={"experience-" + item.id}
            language={item}
            onAction={() => handleEdit(item)}
          />
        ))}
      </ListContainer>

      <Modal open={editFlag} onClose={editOff}>
        <ModalContent
          onCancel={editOff}
          title="Edita tu experiencia"
          subtitle="La vida esta llena de cambios. Edita tu experiencia laboral."
          CloseButtonIcon={<TrashIcon color={palette.red[10]} size="xs" />}
        >
          <FormFieldsLanguage language={language} />
        </ModalContent>
      </Modal>

      <Modal open={addFlag} onClose={addOff}>
        <ModalContent
          onCancel={addOff}
          title="Agrega una nueva experiencia"
          subtitle="Describe y agrega tu nueva experiencia laboral."
        >
          <FormFieldsLanguage />
        </ModalContent>
      </Modal>
    </section>
  );
}
