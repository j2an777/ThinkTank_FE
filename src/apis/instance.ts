import axios from 'axios';
import { getNewToken } from './auth';
import { getAccess, setAccess } from '@/hooks/auth/useLocalStorage';

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(async (config) => {
  const access = getAccess();
  if (access) {
    config.headers['Authorization'] = `Bearer ${access}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const access = getAccess();
    if (error.response?.status === 401 && !originalRequest._alreadyRefreshed && access) {
      originalRequest._alreadyRefreshed = true; // 무한 요청 방지
      const newAccessToken = await getNewToken();
      if (newAccessToken) {
        setAccess(newAccessToken);
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return instance(originalRequest);
      }
    }
    throw error;
  },
);

export default instance;
