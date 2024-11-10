import { useEffect, useState } from "react";

function useDebounce(query: string, delay: number) {
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [query, delay]);

  return { debouncedQuery };
}

export default useDebounce;
