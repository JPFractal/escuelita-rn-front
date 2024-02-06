import UserDefaultPhoto from "@/assets/svg/img/user-default.svg";
import RatingStars from "@/components/RatingStars";
import TextIcon from "@/components/common/Typography/text-icon";
import PlaceIcon from "@/assets/svg/icons/place.svg";
import PriceIcon from "@/assets/svg/icons/price.svg";
import TextNdSupport from "@/components/common/Typography/text-nd-support";
import Avatar from "@/components/common/Avatar";
import colors from "@/theme/colors";
import User from "@/types/user";

export default function UserSummaryCard({
  photo = UserDefaultPhoto,
  name = "",
  role = "",
  rating = 0,
  city = "",
  country = "",
  salaryMin = 0,
  salaryMax = 0,
  selected = false,
}: User) {
  const style = { backgroundColor: selected ? colors.bg.selected : "" };

  return (
    <div
      className="flex flex-col gap-[18px] rounded-lg px-4 py-4"
      style={style}
    >
      <div className="flex gap-[18px]">
        <Avatar src={photo} size="md" alt={name} />
        <div className="flex flex-col gap-2">
          <TextNdSupport text={name} support={role} />
          <RatingStars rating={rating} />
          <div className="flex gap-2">
            <TextIcon icon={PlaceIcon} text={`${city}, ${country}`} />
            <TextIcon icon={PriceIcon} text={`${salaryMin} - ${salaryMax}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
