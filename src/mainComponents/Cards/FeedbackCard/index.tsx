import RatingStars from "@/components/RatingStars";
import Avatar from "@/components/common/Avatar";
import Typography from "@/components/common/Typography";
import Feedback from "@/types/Feedback";

export default function FeedbackCard({ feedback }: { feedback: Feedback }) {
  return (
    <div className="p-3 rounded-lg w-full flex gap-4 items-center">
      <Avatar size="md" src={feedback.author.photo} />
      <div className="flex flex-col gap-1 ">
        <div className="flex justify-between w-60 items-center">
          <Typography variant="text">{feedback.author.name}</Typography>
          <RatingStars rating={feedback.score} />
        </div>
        <Typography>{feedback.comment}</Typography>
      </div>
    </div>
  );
}
