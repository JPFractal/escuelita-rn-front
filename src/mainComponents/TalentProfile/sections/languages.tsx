import ListContainer from "@/components/common/Container/List";
import Modal from "@/components/common/Modal";
import ModalContent from "@/components/common/Container/ModalContent";
import { useState } from "react";
import useToogle from "@/hooks/useToogle";
import TrashIcon from "@/components/common/Icon/icons/trash";
import { palette } from "@/themes/colors";
import LanguageCard from "@/mainComponents/Cards/LanguageCard";
import Language from "@/types/Language";
import FormFieldsLanguage from "@/forms/form-fields/language";
import ModalADE from "@/components/ModalADE";

export default function TalentProfileLanguages({
  title = "",
  items = [],
}: {
  title?: string;
  items: Array<Language>;
}) {
  const { flag: flagModal, on: onModal, off: offModal } = useToogle();
  const { flag: typeAction, on: isAdd, off: isEdit } = useToogle();
  const [language, setLanguage] = useState<Language>(items[0]);

  function addTrigger() {
    isAdd();
    onModal();
  }

  function editTrigger(item: Language) {
    isEdit();
    onModal();
  }

  const handleEdit = (item: Language) => {
    setLanguage(item);
  };

  return (
    <section className="col-span-12 ">
      <ListContainer name={title} onAdd={addTrigger}>
        {items.map((item: Language) => (
          <LanguageCard
            key={"experience-" + item.id}
            language={item}
            onAction={() => editTrigger(item)}
          />
        ))}
      </ListContainer>

      <ModalADE
        open={flagModal}
        onClose={offModal}
        isAdd
        addText={{
          title: "Agrega un nuevo idioma",
          subtitle: "Agrega un nuevo idioma aprendido.",
        }}
        editText={{
          title: "Edita tu habilidad en el idioma",
          subtitle: "Edita tu habilidad en el idioma",
        }}
      >
        <FormFieldsLanguage language={language} />
      </ModalADE>
    </section>
  );
}
