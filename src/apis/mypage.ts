import { getAuthAxios } from './authAxios';

/** MYPAGE API */
export const getMyPage = async () => {
  const access = localStorage.getItem('access');

  if (!access) {
    console.error('Access token is missing or invalid');
    throw new Error('Access token is missing or invalid');
  }

  const authAxios = getAuthAxios(access);
  const response = await authAxios.get('/api/mypage');
  return response.data;
};
