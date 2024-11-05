import { SidebarExpandIcon } from "@primer/octicons-react";
import IconButton from "../common/IconButton";
import logo from "../../assets/logo/arcade-x.png";
import GenreList from "./GenreList";
import { Genre } from "../../hooks/useGenres";

interface Props {
  onSidebarToggle: () => void;
  isMobile: boolean;
  onSelectGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}

const Sidebar = ({ onSidebarToggle, isMobile, onSelectGenre, selectedGenre }: Props) => {
  return (
    <div
      className={`${
        isMobile ? "fixed inset-0 w-full" : "min-w-72 max-w-72 border-r border-r-zinc-800"
      } z-50 h-full flex flex-col bg-zinc-900`}
    >
      <div className="w-full px-4 py-2 sm:py-4 flex justify-between items-center border-b border-zinc-800">
        <img src={logo} alt="ArcadeX Logo" className="min-w-6 w-6 aspect-square rounded-full" />
        <IconButton title="Close sidebar" onClick={onSidebarToggle} className="md:hidden">
          <SidebarExpandIcon size={24} className="text-zinc-400" />
        </IconButton>
      </div>
      <GenreList selectedGenre={selectedGenre} onSelectGenre={onSelectGenre} />
    </div>
  );
};

export default Sidebar;
