import useToogle from "@/hooks/useToogle";
import Badge, { BadgeProps } from "../Badge";

interface MenuProps extends BadgeProps {
  children: React.ReactNode;
  title: string;
}

export default function Menu({
  children,
  title,
  className = "",
  color = "gray",
  wide = false,
  component = "button",
}: MenuProps) {
  const { flag, toogle } = useToogle(true);

  return (
    <div className="relative">
      <Badge
        {...{
          className,
          color,
          component,
          children: title,
          onClick: toogle,
          wide,
        }}
      />
      <div className={`bg-[#fff] shadow-md rounded-md ${flag && "hidden"} absolute top-100 left-0 z-10`}>
        {children}
      </div>
    </div>
  );
}
