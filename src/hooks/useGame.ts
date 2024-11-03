import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchGames = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get<FetchGamesResponse>("/games", { signal: controller.signal });
        setGames(response.data.results);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        if (err instanceof CanceledError) return;
        setError(err instanceof Error ? err.message : "An error occurred");
      }
    };

    fetchGames();

    return () => controller.abort();
  }, []);

  return { games, error, loading };
};

export default useGame;
