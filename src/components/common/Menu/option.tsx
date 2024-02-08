import useToogle from "@/hooks/useToogle";

export interface OptionProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Option({
  children,
  className,
  onClick = () => {},
}: OptionProps) {
  const { flag, toogle } = useToogle();

  return (
    <div
      className={`hover:cursor-pointer py-2.5 px-3.5 w-80 ${className} hover:bg-sky-40`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
