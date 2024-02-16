import UserDefaultPhoto from "@/assets/svg/img/user-default.svg";
import RatingStars from "@/components/RatingStars";
import {
  TextPlaceIcon,
  TextPriceIcon,
} from "@/components/common/Typography/text-icon";
import TextNdSupport from "@/components/common/Typography/text-nd-support";
import Avatar from "@/components/common/Avatar";
import Talent from "@/types/Talent";

export default function TalentSummaryCard({
  photo = UserDefaultPhoto,
  name = "",
  role = "",
  rating = 0,
  city = "",
  country = "",
  salary_max = 0,
  salary_min = 0,
  selected = false,
}: Talent) {
  let styles =
    "flex flex-col gap-[18px] rounded-lg px-4 py-4 w-96 hover:bg-sky-40 hover:cursor-pointer ";

  if (selected) styles += " bg-sky-40";

  return (
    <div className={styles}>
      <div className="flex gap-[18px]">
        <Avatar src={photo} size="md" alt={name} />
        <div className="flex flex-col gap-2">
          <TextNdSupport text={name} support={role} />
          <RatingStars rating={rating} />
          <div className="flex gap-2">
            <TextPlaceIcon text={`${city}, ${country}`} />
            <TextPriceIcon text={`${salary_max} - ${salary_min}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
