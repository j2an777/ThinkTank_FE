import { getAccess } from '@/hooks/auth/useLocalStorage';
import instance from './instance';

export const getNewToken = async () => {
  const expiredToken = getAccess();
  const response = await instance.post('/api/reissue', { expiredToken: expiredToken });
  return response.data.accessToken;
};
