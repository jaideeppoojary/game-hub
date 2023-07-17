import APIClinet from "./api-client";
import { REST_ENDPOINT } from "./constants";
import { Platform } from "./plaformService";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

export default new APIClinet<Game>(REST_ENDPOINT.getGames);