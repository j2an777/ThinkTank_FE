import { getAuthAxios } from "./authAxios";


export const getNewToken = async () => {
    const expiredToken = localStorage.getItem('access');
    const authAxios = getAuthAxios(expiredToken);
    try {
      const response = await authAxios.post('/api/reissue', { expiredToken: expiredToken });
      const newAccessToken = response.data.accessToken;
      localStorage.setItem('access', newAccessToken);
      console.log('토큰 재발급 성공', newAccessToken);
      return newAccessToken;
    } catch (error) {
      console.error('토큰 재발급 실패', error);
      throw error;
    }
  };