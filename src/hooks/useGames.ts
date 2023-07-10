import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform : Platform}[] ;
  metacritic: number;
}
interface IFetchGameResponse {
  count: number;
  next?: string;
  previous?: string;
  results: Game [];
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(()=>{
    const controller = new AbortController();
    setLoading(true);
    apiClient.get<IFetchGameResponse>('/games', {signal: controller.signal}
    )
      .then(res=> {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch(err => {
        if(!(err instanceof CanceledError)) setError(err.message)
        setLoading(false);
      });
    
      return () => controller.abort();
  }, []);

  return {games,error, isLoading};
};

export default useGames;