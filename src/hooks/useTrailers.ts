import { useQuery } from '@tanstack/react-query';
import APIClinet from '../services/api-client';
import Trailer from '../entities/Trailer';
import ms from 'ms';

const useTrailer = (gameId: number) => {
  const apiClient = new APIClinet<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ['trailer', gameId],
    queryFn: apiClient.getAll,
    staleTime: ms('20m'),
  });
};

export default useTrailer;
