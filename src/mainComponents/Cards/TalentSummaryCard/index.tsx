import UserDefaultPhoto from "@/assets/svg/img/user-default.svg";
import RatingStars from "@/components/RatingStars";
import {
  TextPlaceIcon,
  TextPriceIcon,
} from "@/components/common/Typography/text-icon";
import TextNdSupport from "@/components/common/Typography/text-nd-support";
import Avatar from "@/components/common/Avatar";
import Talent from "@/types/Talent";
import useTalents from "@/hooks/useTalents";

export default function TalentSummaryCard({
  photo = UserDefaultPhoto,
  name = "",
  roleId = 0,
  rating = 0,
  cityId = 0,
  countryId = 0,
  salary_max = 0,
  salary_min = 0,
  selected = false,
}: Talent) {
  const { metadata } = useTalents();
  let styles =
    "flex flex-col gap-[18px] rounded-lg px-4 py-4 w-96 hover:bg-sky-40 hover:cursor-pointer ";

  if (selected) styles += " bg-sky-40";
  return (
    <div className={styles}>
      <div className="flex gap-[18px]">
        <Avatar src={photo} size="md" alt={name} />
        <div className="flex flex-col gap-2">
          <TextNdSupport text={name} support={
            metadata?.technicalProfiles.find(role => role.id == roleId)
            ?.name
          } />
          <RatingStars rating={rating} />
          <div className="flex gap-2">
            <TextPlaceIcon text={`${
              metadata?.cities.find(city => city.id == cityId)
              ?.name
            }, ${
              metadata?.countries.find(country => country.id == countryId)
              ?.name
            }`} />
            <TextPriceIcon text={`${salary_min} - ${salary_max}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
