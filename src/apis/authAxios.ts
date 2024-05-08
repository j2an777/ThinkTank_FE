import axios from 'axios';

export const getAuthAxios = (accessToken: string) => {
  const authAxios = axios.create({
    baseURL: 'http://211.206.94.24:9999',
    headers: {
      'Content-Type': 'application/json',
      access: `Bearer ${accessToken}`,
    },
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
