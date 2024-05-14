import { MypageArticles } from '@/types/mypage';
import instance from './instance';

/** MYPAGE 게시글 조회 */
export const getMypageArticles = async ({
  page = 0,
  size = 10,
  value,
  email,
}: MypageArticles) => {
  const response = await instance.get('/api/users/profile', {
    params: {
      page,
      size,
      value,
      email,
    },
  });

  const data = response.data.posts;
  const nextPage = response.data.pageInfo.isDone ? null : page + 1;
  return { data, nextPage };
};
