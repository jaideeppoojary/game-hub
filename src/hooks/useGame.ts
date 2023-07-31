import { useQuery } from '@tanstack/react-query';
import APIClinet from '../services/api-client';
import { Game } from './useGames';
import ms from 'ms';

const apiClient = new APIClinet<Game>('/games');

const useGame = (slug: string) => useQuery<Game, Error>({
  queryKey: ['games', slug],
  queryFn: () => apiClient.get(slug),
  staleTime: ms('10m')
});

export default useGame;