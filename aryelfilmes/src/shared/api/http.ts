import axios from 'axios';
import { baseURL } from './path';

function httpClientBuilder() {
  const client = axios.create({ baseURL })

  client.interceptors.request.use((config) => {
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjk0MmRlNjU4MjhmM2E4ZDFiZDE5MGM0ZDU1YWVlYiIsInN1YiI6IjYzNWFiNTdjZDFhODkzMDA3ZDVmMDQ0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7fZlM8KPoUHoYZo6jrtidjIIcoyCyL7ZjzcDjAAiEO8";
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  });

  return client;
}

const http = httpClientBuilder()

export { http };

