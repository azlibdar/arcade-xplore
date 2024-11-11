import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "../constants";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGame = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: async () => {
      const res = await apiClient.get("/games", {
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          publishers: gameQuery.publisher?.id,
          search: gameQuery?.searchQuery,
        },
      });
      return res.data;
    },
    staleTime: 1000 * 60 * 60 * 24,
  });

export default useGame;
