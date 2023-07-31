import { useQuery } from '@tanstack/react-query';
import APIClinet from '../services/api-client';
import { Trailer } from '../entities/trailer';

const useTrailer = (gameId: number) => {
  const apiClient = new APIClinet<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ['trailer', gameId],
    queryFn: apiClient.getAll
  });
};

export default useTrailer;