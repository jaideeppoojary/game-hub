import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
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

  useEffect(()=>{
    const controller = new AbortController();
    apiClient.get<IFetchGameResponse>('/games', {signal: controller.signal}
    )
      .then(res=> setGames(res.data.results))
      .catch(err => {
        if(!(err instanceof CanceledError)) setError(err.message)
      });
    
      return () => controller.abort();
  }, []);

  return {games,error};
};

export default useGames;