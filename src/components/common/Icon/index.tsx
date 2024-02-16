import { is } from "@/constraints/Values/size-icons";
import Image from "next/image";
import React from "react";

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
      className={className}
      width={is[size]}
      height={is[size]}
      src={src}
      alt="icon"
      {...props}
    />
  );
}
