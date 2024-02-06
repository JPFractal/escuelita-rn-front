import Image from "next/image";

export default function Avatar({
  src,
  alt,
  size = "md",
  className,
}: {
  src: string;
  alt: string;
  size?: "md" | "xs";
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
