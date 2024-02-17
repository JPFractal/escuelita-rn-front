import Icon from "../common/Icon";
import FilledStar from "@/assets/svg/icons/star-filled.svg";
import EmptyStar from "@/assets/svg/icons/star.svg";
import StarIcon from "../common/Icon/icons/star";
import { palette } from "@/themes/colors";
import FormControl from "../common/FormControl";
import { useEffect, useState } from "react";

export default function RatingStars({
  rating = 0,
  formControl = false,
  name = "",
  label,
}: any) {
  const [_rating, setRating] = useState(rating);
  const [prevRating, setPrevRating] = useState(rating);

  const content = (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <StarIcon
          className={"!p-0 " + (formControl && "cursor-pointer")}
          key={index}
          color={palette.orange["20"]}
          filled={index < _rating}
          size="xs"
          {...(formControl
            ? {
                onMouseOver: () => setRating(index + 1),
                onMouseOut: () => setRating(prevRating),
                onClick: () => setPrevRating(index + 1),
              }
            : {})}
        />
      ))}
    </div>
  );

  return !formControl ? (
    <>{content}</>
  ) : (
    <FormControl label={label}>
      {content}
      <input
        className="hidden"
        name={name}
        value={_rating}
        type="number"
        onChange={(e) => {
          e.target.value = e.target.value;
        }}
      />
    </FormControl>
  );
}
