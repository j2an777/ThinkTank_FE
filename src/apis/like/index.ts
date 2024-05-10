import { getAuthAxios } from '../authAxios';

// 좋아요 수 업데이트 구문
const updateLike = async (postId: number): Promise<void> => {
  const authAxios = getAuthAxios();

  try {
    const response = await authAxios.post('/api/like', postId);
    console.log('성공', response);
  } catch (error) {
    console.error('실패', error);
  }
};

export default updateLike;
