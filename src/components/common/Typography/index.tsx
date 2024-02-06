interface TypographyProps {
  variant?: "text" | "support";
  children: React.ReactNode;
}

export default function Typography({
  variant = "support",
  children,
}: TypographyProps) {
  const styles = {
    text: "text-base font-semibold",
    support: "text-sm text-gray-500",
  };
  return <p className={styles[variant]}>{children}</p>;
}
