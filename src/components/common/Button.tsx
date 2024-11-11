import { cn } from "../../lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  className?: string;
}

const baseStyles =
  "select-none no-underline inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm transition active:translate-y-[1px]";

const variants = {
  primary: "bg-rose-400 text-zinc-950 hover:opacity-90 font-semibold disabled:pointer-events-none disabled:opacity-50",
  secondary: "bg-zinc-400 text-zinc-950 font-semibold hover:opacity-90 disabled:pointer-events-none disabled:opacity-40",
};

const Button = ({ children, variant = "primary", onClick, href, className, ...props }: ButtonProps) => {
  const combinedClassName = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <CustomLink href={href} className={combinedClassName} {...props}>
        {children}
      </CustomLink>
    );
  }

  return (
    <button className={combinedClassName} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const CustomLink = ({ href, children, className, ...props }: CustomLinkProps) => {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
};

export default Button;
