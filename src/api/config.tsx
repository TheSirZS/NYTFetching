import axios from 'axios';

export const configAPI = axios.create({
  baseURL: 'https://api.nytimes.com/svc/movies/v2',
});
