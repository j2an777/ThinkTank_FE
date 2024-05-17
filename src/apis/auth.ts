

import { getAccess } from '@/hooks/auth/useLocalStorage';
import instance from './instance';

export const getNewToken = async () => {
  const expiredToken = getAccess();

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

