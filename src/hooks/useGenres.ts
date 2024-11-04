import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchGenres = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get<FetchGenresResponse>("/genres", { signal: controller.signal });
        setGenres(response.data.results);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        if (err instanceof CanceledError) return;
        setError(err instanceof Error ? err.message : "An error occurred");
      }
    };

    fetchGenres();

    return () => controller.abort();
  }, []);

  return { genres, error, loading };
};

export default useGenres;
