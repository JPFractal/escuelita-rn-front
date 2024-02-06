import Image from "next/image";

export default function Icon({
  src,
  size = "md",
  className,
}: {
  src: string;
  size?: "md" | "xs";
  className?: string;
}) {
  const is = {
    md: 20,
    xs: 16,
  };

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
