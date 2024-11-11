import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: API_KEY,
  },
});
