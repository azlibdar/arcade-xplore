import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchGenres = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get<FetchResponse<T>>(endpoint, { signal: controller.signal });
        setData(response.data.results);
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

  return { data, error, loading };
};

export default useData;
