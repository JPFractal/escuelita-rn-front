import { IconSVGProps } from "@/types/common/IconSVG";
import IconBaseSVG from "../base";

export default function AddIcon({
  size = "md",
  className = "",
  color,
  ...props
}: IconSVGProps) {
  return (
    <IconBaseSVG size={size} className={className} {...props}>
      <svg
        className="w-full h-full"
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.1665 7.30485H0.166504V5.63818H5.1665V0.638184H6.83317V5.63818H11.8332V7.30485H6.83317V12.3049H5.1665V7.30485Z"
          fill={color ?? "currentColor"}
        />
      </svg>
    </IconBaseSVG>
  );
}
