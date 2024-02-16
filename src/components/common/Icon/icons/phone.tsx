import { IconSVGProps } from "@/types/common/IconSVG";
import IconBaseSVG from "../base";

export default function PhoneIcon({
  size = "md",
  className = "",
  color,
  ...props
}: IconSVGProps) {
  return (
    <IconBaseSVG size={size} className={className} {...props}>
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.3334 14.5714V17.0714C18.3344 17.3035 18.2868 17.5332 18.1939 17.7459C18.1009 17.9585 17.9645 18.1494 17.7935 18.3063C17.6225 18.4632 17.4206 18.5827 17.2007 18.657C16.9809 18.7314 16.7479 18.759 16.5168 18.7381C13.9525 18.4594 11.4893 17.5832 9.32511 16.1797C7.31163 14.9003 5.60455 13.1932 4.32511 11.1797C2.91676 9.00575 2.04031 6.53058 1.76677 3.95475C1.74595 3.7243 1.77334 3.49205 1.84719 3.27277C1.92105 3.05349 2.03975 2.85199 2.19575 2.6811C2.35174 2.51021 2.54161 2.37367 2.75327 2.28018C2.96492 2.18669 3.19372 2.1383 3.42511 2.13808H5.92511C6.32953 2.1341 6.7216 2.27731 7.02824 2.54103C7.33488 2.80474 7.53517 3.17095 7.59177 3.57141C7.69729 4.37147 7.89298 5.15702 8.17511 5.91308C8.28723 6.21135 8.31149 6.53551 8.24503 6.84715C8.17857 7.15879 8.02416 7.44484 7.80011 7.67141L6.74177 8.72975C7.92807 10.816 9.65549 12.5435 11.7418 13.7297L12.8001 12.6714C13.0267 12.4474 13.3127 12.293 13.6244 12.2265C13.936 12.16 14.2602 12.1843 14.5584 12.2964C15.3145 12.5785 16.1001 12.7742 16.9001 12.8797C17.3049 12.9369 17.6746 13.1408 17.9389 13.4527C18.2032 13.7646 18.3436 14.1627 18.3334 14.5714Z"
          stroke={color ?? "currentColor"}
          strokeWidth="1.67"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconBaseSVG>
  );
}
