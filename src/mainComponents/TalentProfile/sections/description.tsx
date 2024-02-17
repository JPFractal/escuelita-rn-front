import ModalContent from "@/components/common/Container/ModalContent";
import Icon from "@/components/common/Icon";
import EditIcon from "@/components/common/Icon/icons/edit";
import Modal from "@/components/common/Modal";
import Typography from "@/components/common/Typography";
import useToogle from "@/hooks/useToogle";
import { TalentFull } from "@/types/Talent";
import Link from "next/link";
import FormFieldsDescription from "../forms/edit-description";

export default function TalentProfileDescription({
  talent,
}: {
  talent: TalentFull;
}) {
  const { flag, on, off } = useToogle();

  return (
    <section className="col-span-12 flex">
      <Typography>
        {talent.description}
        <span
          className="material-symbols-outlined align-middle cursor-pointer hover:bg-gray-40 rounded-full"
          onClick={on}
        >
          edit
        </span>
      </Typography>

      <Modal open={flag} onClose={off}>
        <ModalContent
          onCancel={off}
          title="Edita tu descripción"
          subtitle="Tiempo de una nueva descripción? Edítala."
          confirmButtonText="Editar"
        >
          <FormFieldsDescription talent={talent} />
        </ModalContent>
      </Modal>
    </section>
  );
}
