import APIClinet from "./api-client";
import { REST_ENDPOINT } from "./constants";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export default new APIClinet<Genre>(REST_ENDPOINT.getGenres);