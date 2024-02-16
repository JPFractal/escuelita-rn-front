import Icon from "../common/Icon";
import FilledStar from "@/assets/svg/icons/star-filled.svg";
import EmptyStar from "@/assets/svg/icons/star.svg";
import StarIcon from "../common/Icon/icons/star";
import { palette } from "@/themes/colors";

export default function RatingStars({ rating = 0 }: { rating?: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <StarIcon
          className="!p-0"
          key={index}
          color={palette.orange["20"]}
          filled={index < rating}
          size="xs"
        />
      ))}
    </div>
  );
}
