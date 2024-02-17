import Typography from "@/components/common/Typography";
import Feedback from "@/types/Feedback";
import FeedbackCard from "@/mainComponents/Cards/FeedbackCard";

import Button from "@/components/common/Button";
import AddIcon from "@/components/common/Icon/icons/add";
import Modal from "@/components/common/Modal";
import ModalContent from "@/components/common/Container/ModalContent";
import FormFieldsFeedback from "../forms/add-feedback";
import useToogle from "@/hooks/useToogle";

export default function TalentProfileFeedback({
  items,
}: {
  items: Array<Feedback>;
}) {
  const { flag, on, off } = useToogle();

  return (
    <section className="col-span-12 flex flex-col gap-2">
      <div className="relative">
        <Typography variant="support" className="font-bold">
          Feedbacks
        </Typography>
      </div>
      {items.map((item) => (
        <FeedbackCard key={"feedback-comment-" + item.id} feedback={item} />
      ))}

      <Button
        StartIcon={<AddIcon size="xs" />}
        variant="text"
        color="smoke"
        className="font-normal !justify-normal"
        onClick={on}
      >
        Dar nuevo feedback
      </Button>

      <Modal open={flag} onClose={off}>
        <ModalContent onCancel={off} title="Agrega nuevo feedback" subtitle="Añade un puntaje y escribe un comentario.">
          <FormFieldsFeedback />
        </ModalContent>
      </Modal>
    </section>
  );
}
