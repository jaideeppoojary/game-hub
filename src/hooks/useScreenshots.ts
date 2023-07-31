import { useQuery } from '@tanstack/react-query';
import APIClinet from '../services/api-client';
import Screenshots from '../entities/Screenshots';
import ms from 'ms';

const useScreenshots = (game_pk: number) => {
  const apiClient = new APIClinet<Screenshots>(`/games/${game_pk}/screenshots`);
  return useQuery({
    queryKey: ['game_screenshots', game_pk],
    queryFn: apiClient.getAll,
    staleTime: ms('10m'),
  });
};

export default useScreenshots;