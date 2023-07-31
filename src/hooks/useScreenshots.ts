import { useQuery } from '@tanstack/react-query';
import APIClinet from '../services/api-client';
import { Screenshots } from '../entities/Screenshots';

const useScreenshots = (game_pk: number) => {
  const apiClient = new APIClinet<Screenshots>(`/games/${game_pk}/screenshots`);
  return useQuery({
    queryKey: ['game_screenshots', game_pk],
    queryFn: apiClient.getAll
  });
};

export default useScreenshots;