import Typography from ".";
import Icon from "../Icon";

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
