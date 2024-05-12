import axios from 'axios';
import { getNewToken } from './refresh';

const access = localStorage.getItem('access');

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${access}`,
  },
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const alreadyRefreshed = originalRequest._alreadyRefreshed;
    if (error.response?.status === 401 && !alreadyRefreshed) {
      originalRequest._alreadyRefreshed = true; // 무한 요청 방지
      try {
        await getNewToken();
        return instance(originalRequest);
      } catch (refreshError) {
        console.error('토큰 발급 실패', refreshError);
        window.location.href = '/login';
      }
    }
  },
);

export default instance;

// export const getAuthAxios = (accessToken?: string | null) => {
//   const headersOption = accessToken
//     ? {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${accessToken}`,
//       }
//     : {
//         'Content-Type': 'application/json',
//       };

//   const authAxios = axios.create({
//     baseURL: import.meta.env.VITE_BASE_URL,
//     headers: headersOption,
//   });

//   authAxios.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//       const originalRequest = error.config;
//       if (error.response && error.response.status === 401 && !originalRequest._retry) {
//         try {
//           originalRequest._retry = true; // 무한으로 요청되는 것 막음
//           const newAccessToken = await getNewToken();
//           if (newAccessToken) {
//             localStorage.setItem('access', newAccessToken);
//             originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
//             return authAxios(originalRequest);
//           }
//         } catch (error) {
//           return console.log('토큰 재발급 실패:');
//         }
//       } else {
//         return console.log('error', error);
//       }
//     },
//   );

//   return authAxios;
// };

// instance.interceptors.request.use((config) => {
//   const token = localStorage.getItem('access');
//   config.headers['Authorization'] = `Bearer ${token}`;
//   return config;
// });
