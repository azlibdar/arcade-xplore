import { MarkGithubIcon, SidebarCollapseIcon } from "@primer/octicons-react";
import IconButton from "../common/IconButton";

interface Props {
  isSidebarOpen: boolean;
  onSidebarToggle: () => void;
}

const Navbar = ({ isSidebarOpen, onSidebarToggle }: Props) => {
  return (
    <nav className="w-full px-4 py-2 flex justify-between items-center border-b border-zinc-800">
      <div>
        {!isSidebarOpen && (
          <IconButton title="Open sidebar" onClick={onSidebarToggle}>
            <SidebarCollapseIcon size={24} className="text-zinc-400" />
          </IconButton>
        )}
      </div>
      <IconButton title="Contribute">
        <MarkGithubIcon size={24} className="text-zinc-400" />
      </IconButton>
    </nav>
  );
};

export default Navbar;
