import axios from 'axios';
import { getNewToken } from './refresh';

export const getAuthAxios = (accessToken?: string | null) => {
  const headersOption = accessToken
    ? {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      }
    : {
        'Content-Type': 'application/json',
      };

  const authAxios = axios.create({
    baseURL: 'http://13.124.54.157:8080',
    headers: headersOption,
  });

  authAxios.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (error.response && error.response.status === 401 && !originalRequest._retry) {
        try {
          originalRequest._retry = true; // 무한으로 요청되는 것 막음
          const newAccessToken = await getNewToken();
          if (newAccessToken) {
            localStorage.setItem('access', newAccessToken);
            originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
            return authAxios(originalRequest);
          }
        } catch (error) {
          return console.log('토큰 재발급 실패:');
        }
      } else {
        return console.log('error', error);
      }
    },
  );

  return authAxios;
};