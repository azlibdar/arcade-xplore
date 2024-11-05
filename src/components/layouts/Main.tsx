import { Genre } from "../../hooks/useGenres";
import { PlatformList } from "../../hooks/usePlatforms";
import { Publisher } from "../../hooks/usePublishers";
import MainSearch from "../ui/MainSearch";
import GameGrid from "./GameGrid";
import NavBar from "./Navbar";
import SortControls from "./SortControls";

interface Props {
  isSidebarOpen: boolean;
  onSidebarToggle: () => void;
  selectedGenre: Genre | null;
  onSelectPlatform: (platform: PlatformList | "") => void;
  onSelectPublisher: (publisher: Publisher | "") => void;
  selectedPlatform: PlatformList | null;
  selectedPublisher: Publisher | null;
  onSearchQuery: (query: string | null) => void;
  searchQuery: string | null;
}

const Main = ({
  isSidebarOpen,
  onSidebarToggle,
  selectedGenre,
  onSelectPlatform,
  onSelectPublisher,
  selectedPublisher,
  selectedPlatform,
  onSearchQuery,
  searchQuery,
}: Props) => {
  return (
    <main className="flex-1 bg-zinc-900 flex flex-col overflow-y-auto">
      <NavBar isSidebarOpen={isSidebarOpen} onSidebarToggle={onSidebarToggle} />
      <div className="w-full max-w-[100rem] mx-auto px-4 sm:px-6 py-8 sm:py-12 flex justify-center items-center flex-col">
        <div className="w-full flex flex-col gap-1 sm:gap-2">
          <h1 className="text-2xl sm:text-3xl font-semibold text-zinc-200 w-full">
            Arcade<span className="text-rose-400">Xplore</span>
          </h1>
          <p className="text:sm sm:text-base text-zinc-400">Find your favorite games and discover new ones.</p>
        </div>
        <div className="w-full flex justify-between gap-3 flex-col lg:flex-row mt-8 mb-6">
          <MainSearch onSearchQuery={onSearchQuery} />
          <SortControls onSelectPlatform={onSelectPlatform} onSelectPublisher={onSelectPublisher} />
        </div>
        <GameGrid
          selectedGenre={selectedGenre}
          searchQuery={searchQuery}
          selectedPlatform={selectedPlatform}
          selectedPublisher={selectedPublisher}
        />
      </div>
    </main>
  );
};

export default Main;
