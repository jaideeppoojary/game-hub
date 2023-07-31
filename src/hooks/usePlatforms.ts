import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClinet, { FetchResponse } from "../services/api-client";
import { QUERY_KEY, REST_ENDPOINT } from "../services/constants";
import ms from "ms";
import Platform from '../entities/Platform';

const apiClient = new APIClinet<Platform>(REST_ENDPOINT.getPlatform);

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: QUERY_KEY.platform,
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platforms,
  });
}
export default usePlatforms;