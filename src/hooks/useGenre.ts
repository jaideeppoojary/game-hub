import genre from "../data/genre";
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => ({data: genre, error: null, isLoading: false});

export default useGenre;