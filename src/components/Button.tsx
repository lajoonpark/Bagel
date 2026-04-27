interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const base =
    "inline-block px-7 py-3 rounded-full font-semibold text-sm transition-all duration-200 shadow-md cursor-pointer select-none";

  const styles: Record<string, string> = {
    primary:
      "bg-brand-blue text-white hover:bg-brand-blue-dark hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "bg-transparent text-white border-2 border-white hover:bg-white hover:text-brand-orange hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0",
  };

  const classes = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
