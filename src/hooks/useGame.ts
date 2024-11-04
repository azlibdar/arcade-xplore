import useData from "./useData";
import { Genre } from "./useGenres";
import { PlatformList } from "./usePlatforms";

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

const useGame = (selectedGenre: Genre | null, selectedPlatform: PlatformList | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id, parent_platforms: selectedPlatform?.id } }, [
    selectedGenre?.id,
    selectedPlatform?.id,
  ]);

export default useGame;
