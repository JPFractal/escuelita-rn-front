import Image from "next/image";
import Icon from "../Icon";
import colors from "@/theme/colors";

interface ButtonProps {
  children?: React.ReactNode;
  variant?: "contained" | "outlined";
  color?: "green" | "sky-blue";
  startIcon?: string;
}

export default function Button({
  children,
  variant = "contained",
  color = "green",
  startIcon,
}: ButtonProps) {
  return (
    <button
      className="flex border rounded-lg px-4 py-[10px] capitalize font-semibold"
      style={{
        borderColor: colors.button[color],
        ...(variant === "contained"
          ? {
              backgroundColor: colors.button[color],
              color: "white",
            }
          : { color: colors.button[color] }),
      }}
    >
      {startIcon && <Icon src={startIcon} className="mr-3" />}
      {children}
    </button>
  );
}
