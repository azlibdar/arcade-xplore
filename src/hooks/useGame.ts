import { GameQuery } from "../App";
import { Platform } from "../constants";
import useData from "./useData";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGame = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        publishers: gameQuery.publisher?.id,
        search: gameQuery?.searchQuery,
      },
    },
    [gameQuery]
  );

export default useGame;
