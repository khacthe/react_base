import { AxiosRequestConfig } from 'axios';

const DEFAULT_API_CONFIG: AxiosRequestConfig = {
  baseURL: 'https://api.github.com',
  timeout: process.env.TIMEOUT,
  apiVersion: 'v1',
  headers: {
    'Accept': 'application/json',
  },
};

export { DEFAULT_API_CONFIG };