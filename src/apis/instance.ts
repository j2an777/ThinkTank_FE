import axios from 'axios';

const access = localStorage.getItem('access');

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `bearer ${access}`,
  },
});

instance.interceptors.response.use(async (response) => {
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

export default instance;
