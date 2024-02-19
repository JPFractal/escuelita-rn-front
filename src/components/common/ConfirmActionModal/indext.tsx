import { title } from "process";
import ModalContent from "../Container/ModalContent";
import Modal from "../Modal";

interface ConfirmActionModalProps {
  title?: string;
  subheader?: string;
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  zIndex?: { bg: number; content: number };
}

export default function ConfirmActionModal({
  title = "¿Está seguro?",
  subheader = "Click en continuar para guardar los cambios",
  open,
  onClose,
  onConfirm,
  zIndex = { bg: 20, content: 30 },
}: ConfirmActionModalProps) {
  const handleConfirm = () => {
    onClose();
    onConfirm();
  };

  return (
    <Modal open={open} onClose={onClose} zIndex={zIndex}>
      <ModalContent
        title={title}
        subtitle={subheader}
        confirmButtonText="Continuar"
        cancelButtonText="Cancelar"
        onClose={onClose}
        onCancel={onClose}
        onConfirm={handleConfirm}
      ></ModalContent>
    </Modal>
  );
}
