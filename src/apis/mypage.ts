import { MypageArticles } from '@/types/mypage';
import instance from './instance';

/** MYPAGE 게시글 조회 */
export const getMypageArticles = async ({ page, size, value, email }: MypageArticles) => {
  try {
    const response = await instance.get('/api/users/profile', {
      params: {
        page,
        size,
        value,
        email,
      },
    });

    const posts = response.data.posts;
    const nextPage = response.data.pageInfo.isDone ? null : page + 1;
    return { posts, nextPage };
  } catch (error) {
    throw new Error('실패');
  }
};

/** 타인 프로필 조회 */
export const getOthersProfile = async (email: string | null) => {
  try {
    const response = await instance.get('/api/users/profile', {
      params: {
        page: 0,
        size: 10,
        value: 'created',
        email,
      },
    });

    const user = response.data.user;
    return user;
  } catch (error) {
    throw new Error('실패');
  }
};
