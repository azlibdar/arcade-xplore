import useData from "./useData";

export interface Publisher {
  id: number;
  name: string;
  slug: string;
}

const usePublishers = () => {
  const { data, error, loading } = useData<Publisher[][]>("/publishers");

  const flattenedData = data?.flat() || [];

  return { data: flattenedData, error, loading };
};

export default usePublishers;
