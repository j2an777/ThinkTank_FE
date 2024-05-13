import { MypagePosts } from '@/types/mypage';
import instance from './instance';

/** MYPAGE 게시글 조회 */
export const getMypageArticles = async ({
  pageIndex,
  isDone,
  value,
  email,
  loginUserId,
}: MypagePosts) => {
  const response = await instance.get('/api/mypage/posts', {
    params: {
      pageIndex: pageIndex,
      isDone: isDone,
      value: value,
      email: email,
      loginUserId: loginUserId,
    },
  });

  const data = response.data.posts;
  const nextPage = response.data.pageInfo.done ? null : pageIndex + 1;
  return { data, nextPage };
};
