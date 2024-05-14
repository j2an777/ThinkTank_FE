import instance from './instance';

export const getNewToken = async () => {
  const expiredToken = localStorage.getItem('access');
  try {
    const response = await instance.post('/api/reissue', { expiredToken: expiredToken });
    const newAccessToken = response.data.accessToken;
<<<<<<< HEAD
=======
    console.log('토큰 재발급 성공', newAccessToken);
>>>>>>> origin/dev
    return newAccessToken;
  } catch (error) {
    console.error('토큰 재발급 실패', error);
    throw error;
  }
};
