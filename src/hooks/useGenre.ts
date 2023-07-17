import { useQuery } from '@tanstack/react-query';
import genreService, { Genre } from "../services/genreService";
import genre from '../data/genres';
import { QUERY_KEY } from '../services/constants';

const useGenre = () => {
  return useQuery({
    queryKey: QUERY_KEY.genres,
    queryFn: genreService.getAll,
    staleTime: 24 * 60 * 60 * 1000,// 24hrs
    initialData: { count: genre.length, results: genre }
  });
};

export default useGenre;