import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { FetchResponse } from "../services/api-client";
import { QUERY_KEY } from "../services/constants";
import plaformService, { Platform } from "../services/plaformService";

const usePlatform = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: QUERY_KEY.platform,
    queryFn: plaformService.getAll,
    staleTime: 24 * 60 * 60 * 1000,// 24hrs
    initialData: { count: platforms.length, results: platforms}
  });
}
export default usePlatform;