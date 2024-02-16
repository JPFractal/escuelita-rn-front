import { is } from "@/constraints/Values/size-icons";
import { IconSVGProps } from "@/types/common/IconSVG";

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
      className={`${className} flex items-center justify-center p-0.5`}
      {...props}
    >
      {children}
    </span>
  );
}
