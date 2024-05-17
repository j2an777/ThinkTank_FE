import instance from './instance';

export const getNewToken = async () => {
  const expiredToken = localStorage.getItem('access');
  if (!expiredToken) throw new Error('로그인');
  try {
    const response = await instance.post('/api/reissue', { expiredToken: expiredToken });
    const newAccessToken = response.data.accessToken;
    console.log('토큰 재발급 성공', newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.error('토큰 재발급 실패', error);
    throw error;
  }
};

export default getNewToken;
