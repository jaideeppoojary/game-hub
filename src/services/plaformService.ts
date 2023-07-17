import APIClinet from "./api-client";
import { REST_ENDPOINT } from "./constants";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export default new APIClinet<Platform>(REST_ENDPOINT.getPlatform);