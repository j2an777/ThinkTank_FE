import { MypagePosts } from '@/types/mypage';
import instance from './authAxios';
import { User, UserModify } from '@/types/auth';

/** User 정보 불러오기 */
export const getUserInfo = async () => {
  const response = await instance.get('/api/mypage/users');
  console.log(response.data);
  return response.data as User;
};

/** User 정보 수정 */
export const putUser = async (data: UserModify) => {
  const response = await instance.put('/api/mypage/users', data);
  console.log(response.data);
  return response.data;
};

/** MYPAGE 게시글 조회 */
export const getMypagePosts = async ({
  pageIndex,
  done,
  value,
  userNickname,
  loginUserId,
}: MypagePosts) => {
  const response = await instance.get('/api/mypage/posts', {
    params: {
      pageIndex: pageIndex,
      done: done,
      value: value,
      userNickname: userNickname,
      loginUserId: loginUserId,
    },
  });

  const data = response.data.posts;
  const nextPage = response.data.pageInfo.done ? null : pageIndex + 1;
  return { data, nextPage };
};
