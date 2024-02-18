import useToogle from "@/hooks/useToogle";
import CheckIcon from "../Icon/icons/check";
import { palette } from "@/themes/colors";

export interface OptionProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  checked?: boolean;
}

export default function Option({
  children,
  className,
  onClick = () => {},
  checked = false,
}: OptionProps) {
  return (
    <div
      className={`hover:cursor-pointer py-2.5 px-3.5 text-nowrap ${className} hover:bg-sky-40 w-full flex justify-between ${
        checked && "bg-gray-50"
      }`}
      onClick={onClick}
    >
      {children}
      {checked && (
        <CheckIcon color={palette.sky[10]} className="!p-0" size="xs" />
      )}
    </div>
  );
}
