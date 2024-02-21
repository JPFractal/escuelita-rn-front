import Modal from "../common/Modal";
import ConfirmActionModal from "../common/ConfirmActionModal/indext";
import ModalContent from "../common/Container/ModalContent";
import { useState } from "react";
import useToogle from "@/hooks/useToogle";
import TrashIcon from "../common/Icon/icons/trash";
import { palette } from "@/themes/colors";

interface ModalADEprops {
  children: React.ReactNode;
  onClose?: () => void;
  onDeleted?: () => void;
  onAdd?: () => void;
  onEdit?: () => void;
  open: boolean;
  isAdd: boolean;
  addText: { title: string; subtitle: string };
  editText: { title: string; subtitle: string };
}

export default function ModalADE({
  children,
  open,
  onClose = () => {},
  onDeleted = () => {},
  onAdd = () => {},
  onEdit = () => {},
  isAdd,
  addText = { title: "Add", subtitle: "Add" },
  editText = { title: "Edit", subtitle: "Edit" },
}: ModalADEprops) {
  const [action, setAction] = useState<"A" | "D" | "E">("A");

  const {
    flag: confirmModalState,
    on: openConfirmModal,
    off: closeConfirmModal,
  } = useToogle();

  function handleDelete() {
    openConfirmModal();
    setAction("D");
  }

  function handleEdit() {
    openConfirmModal();
    setAction("E");
  }

  function handleAdd() {
    openConfirmModal();
    setAction("A");
  }

  function handleConfirm() {
    switch (action) {
      // prettier-ignore
      case "A": onAdd(); break;
      // prettier-ignore
      case "D": onDeleted(); break;
      // prettier-ignore
      case "E": onEdit(); break;
    }

    closeConfirmModal();
  }

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <ModalContent
          onCancel={onClose}
          onClose={handleDelete}
          onConfirm={isAdd ? handleAdd : handleEdit}
          title={isAdd ? addText.title : editText.title}
          subtitle={isAdd ? addText.subtitle : editText.subtitle}
          confirmButtonType="submit"
          CloseButtonIcon={!isAdd && <TrashIcon color={palette.red[10]} />}
        >
          {children}
        </ModalContent>
      </Modal>

      <ConfirmActionModal
        open={confirmModalState}
        onConfirm={handleConfirm}
        onClose={closeConfirmModal}
      />
    </>
  );
}
