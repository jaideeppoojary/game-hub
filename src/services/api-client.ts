import axios from 'axios';

export default axios.create({
  baseURL: import.meta.env.VITE_RAWGS_API_URL,
  params: {
    key: import.meta.env.VITE_RAWGS_API_KEY,
  }
});