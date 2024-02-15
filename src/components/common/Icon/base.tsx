import { IconSVGProps } from "@/types/common/IconSVG";
import { is } from "./size";

interface IconBaseSVGProps extends IconSVGProps {
  children: React.ReactNode;
  [key: string]: any;
}

export default function IconBaseSVG({
  children,
  size = "md",
  className,
  ...props
}: IconBaseSVGProps) {
  return (
    <span
      style={{ width: is[size], height: is[size] }}
      className={`${className} flex items-center`}
      {...props}
    >
      {children}
    </span>
  );
}
