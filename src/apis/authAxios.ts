import axios from 'axios';

export const getAuthAxios = (accessToken?: string) => {
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
    withCredentials: true,
  });

  authAxios.interceptors.response.use(async (response) => {
    if (response.status === 200) {
      return response;
    } else {
      if (response.data && response.data.accessToken) {
        const accessToken = response.data.accessToken;
        localStorage.setItem('access', accessToken); // 새 토큰을 로컬 스토리지에 저장
        console.log('access token 재발급');

        // 헤더에 새 토큰 반영
        //authAxios.defaults.headers.access = `Bearer ${accessToken}`;
      }
      return response;
    }
  });

  return authAxios;
};
