import axios from 'axios';
import { getNewRefreshToken } from './refresh';

export const getAuthAxios = (token: string) => {
  const authAxios = axios.create({
    baseURL: 'http://211.206.94.24:9999',
    headers: {
      'Content-Type': 'application/json',
      access: `Bearer ${token}`,
    },
  });

  authAxios.interceptors.response.use(
    (response) => response, // 성공 응답은 그대로 반환

    async (error) => {
      if (error.response && error.response.status === 401) {
        try {
          const { accessToken } = await getNewRefreshToken(); // 새로운 토큰 가져오기
          error.config.headers['access'] = `Bearer ${accessToken}`;
          localStorage.setItem('access', accessToken);
          return authAxios(error.config);
        } catch (refreshError) {
          // 리프레시 토큰 실패 처리
          console.error('Failed to refresh token:', refreshError);
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error); // 다른 모든 에러는 그대로 반환
    },
  );

  return authAxios;
};
