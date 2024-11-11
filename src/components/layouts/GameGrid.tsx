import { useEffect, useRef } from "react";
import { GameQuery } from "../../App";
import useGame from "../../hooks/useGame";
import ErrorMsg from "../common/ErrorMsg";
import GameCard from "../ui/GameCard";
import GameCardSkeleton from "../ui/GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } = useGame(gameQuery);

  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Trigger when even 50% of the sentinel is visible
      }
    );

    const currentSentinel = sentinelRef.current;
    if (currentSentinel) {
      observer.observe(currentSentinel);
    }

    return () => {
      if (currentSentinel) {
        observer.unobserve(currentSentinel);
      }
    };
  }, [hasNextPage, fetchNextPage, isFetchingNextPage]);

  if (error) return <ErrorMsg errorMsg={error.message} className="bg-zinc-800 py-6 gap-2 text-zinc-200 text-sm" />;

  return (
    <div className="container-type w-full">
      <div className="@container grid grid-cols-1 @[600px]:grid-cols-2 @[1000px]:grid-cols-3 @[1300px]:grid-cols-4 gap-4">
        {isLoading ? (
          [...Array(12)].map((_, index) => <GameCardSkeleton key={index} />)
        ) : data ? (
          data.pages.map((page) => page.results.map((game) => <GameCard key={game.id} game={game} />))
        ) : (
          <ErrorMsg errorMsg="No games found!" className="col-span-3 bg-zinc-800 py-6 gap-2 text-zinc-200 text-sm" />
        )}
      </div>

      {/* Sentinel Element */}
      <div ref={sentinelRef} className="h-4 w-full">
        {isFetchingNextPage && (
          <div className="flex justify-center items-center py-8">
            <p className="text-base text-zinc-400">Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameGrid;
