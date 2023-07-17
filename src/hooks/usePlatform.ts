import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClinet, { FetchResponse } from "../services/api-client";
import { QUERY_KEY, REST_ENDPOINT } from "../services/constants";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClinet<Platform>(REST_ENDPOINT.getPlatform);

const usePlatform = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: QUERY_KEY.platform,
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,// 24hrs
    initialData: { count: platforms.length, results: platforms}
  });
}
export default usePlatform;