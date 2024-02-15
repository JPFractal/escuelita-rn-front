import { IconSVGProps } from "@/types/common/IconSVG";
import IconBaseSVG from "../base";

export default function AddIcon({
  size = "md",
  className = "",
  color = "#667085",
}: IconSVGProps) {
  return (
    <IconBaseSVG size={size} className={className}>
      <svg
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g mask="url(#mask0_147_1275)">
          <path
            d="M9.16675 10.8334H4.16675V9.16675H9.16675V4.16675H10.8334V9.16675H15.8334V10.8334H10.8334V15.8334H9.16675V10.8334Z"
            fill={color}
          />
        </g>
      </svg>
    </IconBaseSVG>
  );
}
