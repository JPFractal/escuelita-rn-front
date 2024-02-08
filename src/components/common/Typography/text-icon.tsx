import Typography from ".";
import Icon from "../Icon";

import PlaceIcon from "@/assets/svg/icons/place.svg";
import PriceIcon from "@/assets/svg/icons/price.svg";

interface TextIconProps {
  icon: string;
  text: string;
}

export default function TextIcon({ icon, text }: TextIconProps) {
  return (
    <div className="flex gap-1 items-center">
      <Icon src={icon} size="xs" />
      <Typography variant="support">{text}</Typography>
    </div>
  );
}

export function TextPriceIcon({ text }: { text: string }) {
  return <TextIcon text={text} icon={PriceIcon} />;
}

export function TextPlaceIcon({ text }: { text: string }) {
  return <TextIcon text={text} icon={PlaceIcon} />;
}
