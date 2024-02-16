import { IconSVGProps } from "@/types/common/IconSVG";
import IconBaseSVG from "../base";

export default function ArrowDownIcon({
  size = "md",
  className = "",
  color,
  ...props
}: IconSVGProps) {
  return (
    <IconBaseSVG size={size} className={className} {...props}>
      <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_64_663"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.471436" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_64_663)">
          <path
            d="M12 15.8464L6 9.84641L7.4 8.44641L12 13.0464L16.6 8.44641L18 9.84641L12 15.8464Z"
            fill={color ?? "currentColor"}
          />
        </g>
      </svg>
    </IconBaseSVG>
  );
}
