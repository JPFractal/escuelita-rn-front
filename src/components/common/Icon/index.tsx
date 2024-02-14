import Image from "next/image";
import { is } from "./size";

interface IconProps {
  src: string;
  size?: "md" | "xs" | "lg";
  className?: string;
  [key: string]: any;
}

export default function Icon({
  src,
  size = "md",
  className,
  ...props
}: IconProps) {
  return (
    <Image
      width={is[size]}
      height={is[size]}
      src={src}
      alt="icon"
      className={className}
      {...props}
    />
  );
}
