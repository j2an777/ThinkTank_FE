import { getAuthAxios } from '../authAxios';

// 좋아요 수 업데이트 구문
const updateLike = async (postId: number): Promise<void> => {
  const access = localStorage.getItem('access');

  if (!access) {
    console.error('Access token is missing or invalid');
    throw new Error('Access token is missing or invalid');
  }

  const authAxios = getAuthAxios(access);

  try {
    const response = await authAxios.post('/api/like', postId);
    console.log('성공', response);
  } catch (error) {
    console.error('실패', error);
  }
};

export default updateLike;
