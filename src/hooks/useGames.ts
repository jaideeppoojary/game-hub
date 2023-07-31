import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClinet, { FetchResponse } from "../services/api-client";
import { PAGE_SIZE, QUERY_KEY, REST_ENDPOINT } from "../services/constants";
import { Platform } from "./usePlatforms";
import useGameQueryStore from "../store";
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  slug: string;
  description: string;
  description_raw: string;
}

const apiClient = new APIClinet<Game>(REST_ENDPOINT.getGames);

const useGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [QUERY_KEY.games, gameQuery],
    queryFn: ({ pageParam = 1 }: QueryFunctionContext) => apiClient.getAll({
      params: {
        genres: gameQuery?.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam,
        page_size: PAGE_SIZE,
      }
    }),
    staleTime: ms('24h'),
    getNextPageParam: (lastPage, allPage) => (lastPage.next ? allPage.length + 1 : undefined),
  });
}

export default useGames;