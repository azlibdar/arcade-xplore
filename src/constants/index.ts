import genresData from "./genresData";
import platformsData from "./platformsData";
import publishersData from "./publishersData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Publisher {
  id: number;
  name: string;
  slug: string;
}

export { platformsData, publishersData };
export default genresData;
