import { IconSVGProps } from "@/types/common/IconSVG";
import IconBaseSVG from "../base";

export default function EditIcon({
  size = "md",
  className = "",
  color = "#667085",
}: IconSVGProps) {
  return (
    <IconBaseSVG size={size} className={className}>
      <svg
        className="w-full h-full"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g mask="url(#mask0_8_4505)">
          <path
            d="M4.16667 15.8333H5.35417L13.5 7.68744L12.3125 6.49994L4.16667 14.6458V15.8333ZM2.5 17.4999V13.9583L13.5 2.97911C13.6667 2.82633 13.8507 2.70827 14.0521 2.62494C14.2535 2.54161 14.4653 2.49994 14.6875 2.49994C14.9097 2.49994 15.125 2.54161 15.3333 2.62494C15.5417 2.70827 15.7222 2.83327 15.875 2.99994L17.0208 4.16661C17.1875 4.31938 17.309 4.49994 17.3854 4.70827C17.4618 4.91661 17.5 5.12494 17.5 5.33327C17.5 5.55549 17.4618 5.7673 17.3854 5.96869C17.309 6.17008 17.1875 6.35411 17.0208 6.52077L6.04167 17.4999H2.5ZM12.8958 7.10411L12.3125 6.49994L13.5 7.68744L12.8958 7.10411Z"
            fill={color}
          />
        </g>
      </svg>
    </IconBaseSVG>
  );
}
