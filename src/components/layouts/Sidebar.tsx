import GenreList from "./GenreList";
import { Genre } from "../../constants";
import IconButton from "../common/IconButton";
import logo from "../../assets/logo/arcade-x.png";
import { SidebarLeftIcon } from "hugeicons-react";

interface Props {
  isMobile: boolean;
  onSelectGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
  onSidebarToggle: () => void;
}

const Sidebar = ({ isMobile, onSelectGenre, selectedGenre, onSidebarToggle }: Props) => {
  return (
    <div className={`${isMobile ? "w-full" : "w-72 min-w-72"} h-full flex flex-col border-r border-zinc-800`}>
      <div className="w-full flex justify-between items-center px-4 py-2 h-14 min-h-14 border-b border-zinc-800">
        <img src={logo} alt="ArcadeXplore" className="size-6" />
        <IconButton title="Close sidebar" onClick={onSidebarToggle}>
          <SidebarLeftIcon size={24} className="text-zinc-400" />
        </IconButton>
      </div>
      <div className="w-full h-full flex flex-col overflow-y-auto scrollbar-thin px-4 py-6">
        <GenreList selectedGenre={selectedGenre} onSelectGenre={onSelectGenre} />
      </div>
    </div>
  );
};

export default Sidebar;
