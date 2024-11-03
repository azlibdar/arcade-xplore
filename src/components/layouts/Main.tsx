import MainSearch from "../ui/MainSearch";
import GameGrid from "./GameGrid";
import NavBar from "./Navbar";

interface Props {
  isSidebarOpen: boolean;
  onSidebarToggle: () => void;
}

const Main = ({ isSidebarOpen, onSidebarToggle }: Props) => {
  return (
    <main className="flex-1 bg-zinc-900 flex flex-col overflow-y-auto">
      <NavBar isSidebarOpen={isSidebarOpen} onSidebarToggle={onSidebarToggle} />
      <div className="px-4 sm:px-6 py-8 sm:py-12 flex justify-center items-center flex-col gap-3 sm:gap-5">
        <h1 className="text-2xl sm:text-4xl font-semibold text-zinc-200">
          Arcade<span className="text-rose-400">Xplore</span>
        </h1>
        <MainSearch />
        <GameGrid />
      </div>
    </main>
  );
};

export default Main;
