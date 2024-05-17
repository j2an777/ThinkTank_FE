import axios from 'axios';
import getNewToken from './auth';

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(async (config) => {
  const access = localStorage.getItem('access');
  if (access) {
    config.headers['Authorization'] = `Bearer ${access}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const access = localStorage.getItem('access');
    if (error.response?.status === 401 && !originalRequest._alreadyRefreshed && access) {
      originalRequest._alreadyRefreshed = true; // 무한 요청 방지
      try {
        const newAccessToken = await getNewToken();
        if (newAccessToken) {
          localStorage.setItem('access', newAccessToken);
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return instance(originalRequest);
        }
      } catch (refreshError) {
        console.error('토큰 발급 실패', refreshError);
        // window.location.href = '/login';
        throw refreshError;
      }
    }
    throw error;
  },
);

export default instance;
