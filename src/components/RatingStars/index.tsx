import Icon from "../common/Icon";
import FilledStar from "@/assets/svg/icons/star-filled.svg";
import EmptyStar from "@/assets/svg/icons/star.svg";

export default function RatingStars({ rating = 0 }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Icon
          key={index}
          src={index < rating ? FilledStar : EmptyStar}
          size="xs"
        />
      ))}
    </div>
  );
}
