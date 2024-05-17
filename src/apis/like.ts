import instance from './instance';

// 좋아요 수 업데이트 구문
export const postLike = async (postId: number): Promise<void> => {
  const response = await instance.post('/api/like', { postId: postId });
  return response.data;
};
