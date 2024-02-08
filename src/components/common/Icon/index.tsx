import Image from "next/image";
import { is } from "./size";

export default function Icon({
  src,
  size = "md",
  className,
}: {
  src: string;
  size?: "md" | "xs" | "lg";
  className?: string;
}) {
  return (
    <Image
      width={is[size]}
      height={is[size]}
      src={src}
      alt="icon"
      className={className}
    />
  );
}
