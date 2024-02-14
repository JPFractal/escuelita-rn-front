import useToogle from "@/hooks/useToogle";
import Button, { ButtonProps } from "../Button";

interface MenuProps extends ButtonProps {
  children: React.ReactNode;
  title: string;
  wide?: boolean;
}

export default function Menu({
  children,
  title,
  className = "",
  variant = "contained",
  startIcon = "",
  endIcon = "",
  EndIcon = null,
  StartIcon = null,
  intensity = "dark",
  color = "gray",
  wide = true,
}: MenuProps) {
  const { flag, toogle } = useToogle(false);

  return (
    <>
      <div className="relative">
        <Button
          {...{
            className,
            color,
            variant,
            intensity,
            children: title,
            onClick: toogle,
            startIcon,
            endIcon,
            EndIcon,
            StartIcon,
          }}
        />
        <div
          className={`bg-[#fff] shadow-md rounded-md ${
            !flag && "hidden"
          } absolute top-100 left-0 z-20 ${wide ? "w-80" : "w-40"}`}
        >
          {children}
        </div>
      </div>
      {flag && (
        <div
          className="fixed w-screen h-screen top-0 right-0 z-10"
          onClick={toogle}
        ></div>
      )}
    </>
  );
}
