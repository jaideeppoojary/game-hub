import { useQuery } from '@tanstack/react-query';
import genre from '../data/genres';
import APIClinet from '../services/api-client';
import { QUERY_KEY, REST_ENDPOINT } from '../services/constants';
import genres from '../data/genres';
import ms from 'ms';
import { Genre } from '../entities/Genre';

const apiClient = new APIClinet<Genre>(REST_ENDPOINT.getGenres);

const useGenres = () => {
  return useQuery({
    queryKey: QUERY_KEY.genres,
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres,
  });
};

export default useGenres;