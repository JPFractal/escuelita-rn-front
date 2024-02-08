import Image from "next/image";
import UserDefaultPhoto from "@/assets/svg/img/user-default.svg";

export default function Avatar({
  src = UserDefaultPhoto,
  alt = "",
  size = "md",
  className,
}: {
  src?: string;
  alt?: string;
  size?: "md" | "xs" | "xl";
  className?: string;
}) {
  const is = {
    xs: 48,
    md: 64,
    xl: 96,
  };

  return (
    <div className="rounded-full overflow-hidden">
      <Image
        width={is[size]}
        height={is[size]}
        src={src}
        alt={alt}
        className={className}
      />
    </div>
  );
}
