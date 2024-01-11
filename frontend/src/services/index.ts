import createClient from 'openapi-fetch';
import { paths } from './api/openapi';
import { API_URL as baseUrl } from '@/common/constants.js';
import { AUTH_KEY } from './auth/auth.js';

export const { GET, PUT, POST, DELETE } = createClient<paths>({
  baseUrl,
  headers: {
    get Authorization() {
      return localStorage.getItem(AUTH_KEY)
        ? `Bearer ${localStorage.getItem(AUTH_KEY)}`
        : undefined;
    }
  }
});

export * from './auth/auth.js';
