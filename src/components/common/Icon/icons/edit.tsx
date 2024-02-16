import { IconSVGProps } from "@/types/common/IconSVG";
import IconBaseSVG from "../base";

export default function EditIcon({
  size = "md",
  className = "",
  color,
  ...props
}: IconSVGProps) {
  return (
    <IconBaseSVG size={size} className={className} {...props}>
      <svg
        className="w-full h-full"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.16667 14.3048H3.35417L11.5 6.15894L10.3125 4.97144L2.16667 13.1173V14.3048ZM0.5 15.9714V12.4298L11.5 1.4506C11.6667 1.29782 11.8507 1.17977 12.0521 1.09644C12.2535 1.0131 12.4653 0.971436 12.6875 0.971436C12.9097 0.971436 13.125 1.0131 13.3333 1.09644C13.5417 1.17977 13.7222 1.30477 13.875 1.47144L15.0208 2.6381C15.1875 2.79088 15.309 2.97144 15.3854 3.17977C15.4618 3.3881 15.5 3.59644 15.5 3.80477C15.5 4.02699 15.4618 4.2388 15.3854 4.44019C15.309 4.64157 15.1875 4.8256 15.0208 4.99227L4.04167 15.9714H0.5ZM10.8958 5.5756L10.3125 4.97144L11.5 6.15894L10.8958 5.5756Z"
          fill={color ?? "currentColor"}
        />
      </svg>
    </IconBaseSVG>
  );
}
