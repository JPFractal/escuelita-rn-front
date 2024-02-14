import { IconSVGProps } from "@/types/common/IconSVG";
import { is } from "../size";

export default function CheckIcon({
  size = "md",
  className = "",
  color = "#667085",
}: IconSVGProps) {
  return (
    <span style={{ width: is[size], height: is[size] }} className={className}>
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.33329 2.5L3.74996 7.08333L1.66663 5"
          stroke={color}
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
  );
}
