interface TypographyProps {
  variant?: "text" | "support";
  children: React.ReactNode;
  className?: string;
}

export default function Typography({
  variant = "support",
  children,
  className,
}: TypographyProps) {
  const styles = {
    text: "text-base font-semibold text-gray-0",
    support: "text-sm text-gray-20",
  };
  return <p className={styles[variant] + " " + className}>{children}</p>;
}
