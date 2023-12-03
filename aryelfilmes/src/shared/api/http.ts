import axios from 'axios';
import { baseURL } from './path';

function httpClientBuilder() {
  const client = axios.create({ baseURL })

  client.interceptors.request.use((config) => {
    const token = "apitoken";
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  });

  return client;
}

const http = httpClientBuilder()

export { http };

