import Typography from "@/components/common/Typography";
import Feedback from "@/types/Feedback";
import FeedbackCard from "@/mainComponents/Cards/FeedbackCard";

import Button from "@/components/common/Button";
import AddIcon from "@/components/common/Icon/icons/add";

export default function TalentProfileFeedback({
  items,
}: {
  items: Array<Feedback>;
}) {
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
      >
        Dar nuevo feedback
      </Button>
    </section>
  );
}
