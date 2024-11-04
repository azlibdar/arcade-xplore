import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(
    () => {
      const controller = new AbortController();

      const fetchGenres = async () => {
        setLoading(true);
        try {
          const response = await apiClient.get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig });
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
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps ? [...deps] : []
  );

  return { data, error, loading };
};

export default useData;
