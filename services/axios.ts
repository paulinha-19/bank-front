import axios from 'axios';
import * as next from 'next';
import * as express from 'express';
import { parseCookies } from 'nookies';

export function getAPIClient(
  ctx?:
    | Pick<next.NextPageContext, 'req'>
    | {
        req: next.NextApiRequest;
      }
    | {
        req: express.Request;
      }
    | null
    | undefined
) {
  const { nextAuthToken: token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
  });

  api.interceptors.request.use((config) => {
    return config;
  });

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  return api;
}
