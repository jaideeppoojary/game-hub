import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClinet, { FetchResponse } from "../services/api-client";
import { QUERY_KEY, REST_ENDPOINT } from "../services/constants";
import { Platform } from "./usePlatform";
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClinet<Game>(REST_ENDPOINT.getGames);

const useGames = (gameQuery: GameQuery) =>{
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: [QUERY_KEY.games, gameQuery],
    queryFn: () => apiClient.getAll({
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      }
    }),
    staleTime: 30 * 60 * 1000,
  });
}

export default useGames;