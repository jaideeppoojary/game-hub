import axios, { AxiosRequestConfig } from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_RAWGS_API_URL,
  params: {
    key: import.meta.env.VITE_RAWGS_API_KEY,
  }
});

export interface FetchResponse<T> {
  count: number;
  next?: string | null;
  results: T[];
}
class APIClinet<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (requestConfig: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, requestConfig)
      .then(res => res.data);
  }
}

export default APIClinet;