import useToogle from "@/hooks/useToogle";
import Typography from "../Typography";

export default function Tooltip({ children, title }: any) {
  const { flag, off, on } = useToogle();

  return (
    <div className="relative" onMouseOver={on} onMouseLeave={off}>
      {children}
      <Typography
        className={`bg-gray-20 text-white-0 p-2 rounded absolute right-0 text-nowrap ${
          !flag && "hidden"
        }`}
      >
        {title}
      </Typography>
    </div>
  );
}
