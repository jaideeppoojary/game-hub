import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchResponse } from "../services/api-client";
import { QUERY_KEY } from "../services/constants";
import gameService, { Game } from "../services/gameService";

const useGames = (gameQuery: GameQuery) =>{
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: [QUERY_KEY.games, gameQuery],
    queryFn: () => gameService.getAll({
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