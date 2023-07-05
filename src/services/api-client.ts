import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '4e0b3c840775471399fa2686bde3f5ef',
  }
});