import instance from './instance';

// 좋아요 수 업데이트 구문
export const postLike = async (postId: number): Promise<void> => {
  try {
    // console.log(typeof(postId));
    const response = await instance.post('/api/like', { postId: postId });
    console.log(response);
  } catch (error) {
    console.error('실패', error);
    throw error;
  }
};
