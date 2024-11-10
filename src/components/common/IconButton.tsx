import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface Props {
  children: ReactNode;
  title?: string;
  onClick?: () => void;
  className?: string;
}

const IconButton = ({ children, title, onClick, className }: Props) => {
  return (
    <button
      onClick={onClick}
      title={title}
      className={cn(
        "p-1 rounded-lg aspect-square flex justify-center items-center transition-all hover:bg-zinc-700/50",
        "bg-transparent",
        className
      )}
    >
      {children}
    </button>
  );
};

export default IconButton;
