import { IconSVGProps } from "@/types/common/IconSVG";
import IconBaseSVG from "../base";

export default function LinkedInIcon({
  size = "md",
  className = "",
  color,
  ...props
}: IconSVGProps) {
  return (
    <IconBaseSVG size={size} className={className} {...props}>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.2234 0.471436H1.77187C0.792187 0.471436 0 1.24487 0 2.20112V22.7371C0 23.6933 0.792187 24.4714 1.77187 24.4714H22.2234C23.2031 24.4714 24 23.6933 24 22.7417V2.20112C24 1.24487 23.2031 0.471436 22.2234 0.471436ZM7.12031 20.923H3.55781V9.46675H7.12031V20.923ZM5.33906 7.90581C4.19531 7.90581 3.27188 6.98237 3.27188 5.84331C3.27188 4.70425 4.19531 3.78081 5.33906 3.78081C6.47813 3.78081 7.40156 4.70425 7.40156 5.84331C7.40156 6.97769 6.47813 7.90581 5.33906 7.90581ZM20.4516 20.923H16.8937V15.3542C16.8937 14.0277 16.8703 12.3167 15.0422 12.3167C13.1906 12.3167 12.9094 13.7652 12.9094 15.2605V20.923H9.35625V9.46675H12.7687V11.0324H12.8156C13.2891 10.1324 14.4516 9.18081 16.1813 9.18081C19.7859 9.18081 20.4516 11.5527 20.4516 14.6371V20.923Z"
          fill={color ?? "currentColor"}
        />
      </svg>
    </IconBaseSVG>
  );
}
