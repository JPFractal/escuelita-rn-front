// import colors from "@/theme/colors";

import { MouseEventHandler } from "react";

export interface BadgeProps {
  wide?: boolean;
  children: React.ReactNode;
  color?: "gray" | "sky" | "pink";
  className?: string;
  onClick?: MouseEventHandler;
}

const colors = {
  // not able to beign in other file
  gray: {
    background: "bg-gray-40",
    border: "border-gray-40",
    text: "text-gray-10",
  },
  sky: {
    background: "bg-sky-40",
    border: "border-sky-40",
    text: "text-sky-10",
  },
  pink: {
    background: "bg-pink-40",
    border: "border-pink-40",
    text: "text-pink-10",
  },
};

export default function Badge({
  children,
  className = "",
  color = "gray",
  wide = false,
  onClick = () => {},
}: BadgeProps) {
  let styles =
    "p-3 rounded-full flex items-center justify-center font-medium text-nowrap";

  styles += ` ${colors[color].background} ${colors[color].text} ${
    !wide && "py-1"
  }`;
  styles += className;

  const inner = <>{children}</>;

  return (
    <span className={styles} onClick={onClick}>
      {inner}
    </span>
  );
}
