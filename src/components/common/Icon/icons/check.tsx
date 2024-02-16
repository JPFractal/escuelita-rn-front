import { IconSVGProps } from "@/types/common/IconSVG";
import IconBaseSVG from "../base";

export default function CheckIcon({
  size = "md",
  className = "",
  color,
  ...props
}: IconSVGProps) {
  return (
    <IconBaseSVG size={size} className={className} {...props}>
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.33329 2.5L3.74996 7.08333L1.66663 5"
          stroke={color ?? "currentColor"}
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconBaseSVG>
  );
}
