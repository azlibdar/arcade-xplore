import { ReactNode } from "react";

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
      className={`p-2 rounded-lg aspect-square flex justify-center items-center transition-all hover:bg-zinc-800 ${className}`}
    >
      {children}
    </button>
  );
};

export default IconButton;
