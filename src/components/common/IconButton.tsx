import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title?: string;
  onClick?: () => void;
}

const IconButton = ({ children, title, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      title={title}
      className="p-2 rounded-lg aspect-square flex justify-center items-center transition-all hover:bg-zinc-800"
    >
      {children}
    </button>
  );
};

export default IconButton;
