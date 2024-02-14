interface TypographyProps {
  variant?: "text" | "text-2" | "support" | "title";
  children?: React.ReactNode;
  className?: string;
}

export default function Typography({
  variant = "support",
  children,
  className,
}: TypographyProps) {
  const styles = {
    title: "text-lg font-semibold text-gray-0",
    text: "text-base font-semibold text-gray-0",
    support: "text-sm text-gray-20",
    "text-2": "text-sm font-medium text-gray-0",
  };

  if (!children) return;
  return <p className={styles[variant] + " " + className}>{children}</p>;
}
