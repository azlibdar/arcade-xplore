import { motion, AnimatePresence } from "framer-motion";
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
  const desktopVariants = {
    initial: { x: "-288px" },
    animate: { x: 0 },
    exit: { x: "-288px" },
  };

  const mobileVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.aside
        variants={isMobile ? mobileVariants : desktopVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 30,
        }}
      >
        <div
          className={`${
            isMobile ? "fixed inset-0 w-full" : "min-w-72 max-w-72 border-r border-r-zinc-800"
          } z-50 h-full flex flex-col bg-zinc-900`}
        >
          <div className="w-full px-4 py-2 flex justify-between items-center border-b border-zinc-800/60">
            <img src={logo} alt="ArcadeX Logo" className="min-w-6 w-6 aspect-square rounded-full" />
            <IconButton title="Close sidebar" onClick={onSidebarToggle}>
              <SidebarExpandIcon size={24} className="text-zinc-400" />
            </IconButton>
          </div>
          <GenreList selectedGenre={selectedGenre} onSelectGenre={onSelectGenre} />
        </div>
      </motion.aside>
    </AnimatePresence>
  );
};

export default Sidebar;
