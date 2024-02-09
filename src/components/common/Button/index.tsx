import Image from "next/image";
import Icon from "../Icon";

import { button as colors } from "@/themes/colors";

export interface ButtonProps {
  children?: React.ReactNode;
  variant?: "contained" | "outlined" | "text";
  color?: "green" | "sky" | "gray";
  iconSize?: "md" | "xs" | "lg";
  startIcon?: string;
  endIcon?: string;
  className?: string;
}

export default function Button({
  children,
  variant = "contained",
  color = "green",
  startIcon,
  endIcon,
  iconSize = "md",
  className = "",
}: ButtonProps) {
  let styles =
    className +
    " flex rounded-lg px-4 py-[10px] items-center capitalize font-semibold";

  if (variant === "outlined")
    styles += ` border ${colors[color].border} ${colors[color].text}`;

  if (variant === "contained")
    styles += ` border ${colors[color].background} text-white-10`;

  if (variant === "text") styles += ` ${colors[color].text}`;

  return (
    <button className={styles}>
      {startIcon && <Icon src={startIcon} className="mr-3" size={iconSize} />}
      {children}
      {endIcon && <Icon src={endIcon} className="ml-3" size={iconSize} />}
    </button>
  );
}
