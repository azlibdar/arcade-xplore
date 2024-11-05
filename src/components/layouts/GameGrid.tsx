import useGame from "../../hooks/useGame";
import { Genre } from "../../hooks/useGenres";
import { PlatformList } from "../../hooks/usePlatforms";
import { Publisher } from "../../hooks/usePublishers";
import ErrorMsg from "../common/ErrorMsg";
import GameCard from "../ui/GameCard";
import GameCardSkeleton from "../ui/GameCardSkeleton";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: PlatformList | null;
  selectedPublisher: Publisher | null;
  searchQuery: string | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform, selectedPublisher, searchQuery }: Props) => {
  const { data, error, loading } = useGame(selectedGenre, selectedPlatform, selectedPublisher, searchQuery);

  console.log(loading);

  if (error) return <ErrorMsg errorMsg={error} />;

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {loading ? (
        [...Array(6)].map((_, index) => <GameCardSkeleton key={index} />)
      ) : data && data.length > 0 ? (
        data.map((game) => <GameCard key={game.id} game={game} />)
      ) : (
        <p className="col-span-full text-center text-gray-500">No games found</p>
      )}
    </div>
  );
};

export default GameGrid;
