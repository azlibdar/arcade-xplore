import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms: { platform: { id: number; name: string } }[];
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchGames = async () => {
      try {
        const response = await apiClient.get<FetchGamesResponse>("/games", { signal: controller.signal });
        setGames(response.data.results);
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError(err instanceof Error ? err.message : "An error occurred");
      }
    };

    fetchGames();

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGame;
