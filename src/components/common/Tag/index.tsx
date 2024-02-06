import colors from "@/theme/colors";

interface TagProps {
  children: React.ReactNode;
  wide?: boolean;
  component?: "span" | "button";
  color?: "grey";
  className?: string;
}

export default function Tag({
  children,
  wide = false,
  className = "",
  color = "grey",
  component = "span",
}: TagProps) {
  const _className =
    "py-1 px-3 rounded-full flex items-center justify-center font-medium text-nowrap " + className;
  const style = {
    backgroundColor: colors.tag[color].color,
    color: colors.tag[color].text,
  };
  const inner = <>{children}</>;

  if (component === "button")
    return (
      <button className={_className} style={style}>
        {inner}
      </button>
    );

  return (
    <span className={_className} style={style}>
      {inner}
    </span>
  );
}
