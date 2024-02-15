interface TypographyProps {
  variant?: "text" | "text-2" | "support" | "title";
  element?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: React.ReactNode;
  className?: string;
}

export default function Typography({
  variant = "support",
  children,
  element = "p",
  className,
}: TypographyProps) {
  const styles = {
    title: "text-lg font-semibold text-gray-0",
    text: "text-base font-semibold text-gray-0",
    support: "text-sm text-gray-20",
    "text-2": "text-sm font-medium text-gray-0",
  };

  if (!children) return;
  switch (element) {
    case "h1":
      return <h1 className={styles[variant] + " " + className}>{children}</h1>;
      break;
    case "h2":
      return <h2 className={styles[variant] + " " + className}>{children}</h2>;
      break;
    case "h3":
      return <h3 className={styles[variant] + " " + className}>{children}</h3>;
      break;
    case "h4":
      return <h4 className={styles[variant] + " " + className}>{children}</h4>;
      break;
    case "h5":
      return <h5 className={styles[variant] + " " + className}>{children}</h5>;
      break;
    case "h6":
      return <h6 className={styles[variant] + " " + className}>{children}</h6>;
      break;
    case "p":
    default:
      return <p className={styles[variant] + " " + className}>{children}</p>;
      break;
  }
}
