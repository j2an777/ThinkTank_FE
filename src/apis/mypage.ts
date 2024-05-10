import { getAuthAxios } from './authAxios';

/** MYPAGE API */
export const getUserInfo = async () => {
  const access = localStorage.getItem('access');

  if (!access) {
    console.error('Access token is missing or invalid');
    throw new Error('Access token is missing or invalid');
  }

  const authAxios = getAuthAxios(access);
  const response = await authAxios.get('/api/mypage/users');
  console.log(response.data);
  return response.data;
};

/** MYPAGE 이미지 수정 */
export const putImage = async () => {
  const access = localStorage.getItem('access');

  if (!access) {
    console.error('Access token is missing or invalid');
    throw new Error('Access token is missing or invalid');
  }

  const authAxios = getAuthAxios(access);
  const response = await authAxios.put('/api/mypage/users/image');
  console.log(response.data);
  return response.data;
};

interface MypagePosts {
  pageParam: number;
  problemType: 'created' | 'liked' | 'solved';
}

/** MYPAGE 게시글 조회 */
export const getMypagePosts = async ({ pageParam = 0, problemType }: MypagePosts) => {
  const access = localStorage.getItem('access');

  if (!access) {
    console.error('Access token is missing or invalid');
    throw new Error('Access token is missing or invalid');
  }

  const authAxios = getAuthAxios(access);

  // problemType을 헤더에 포함하여 요청을 보냅니다.
  const response = await authAxios.get('/api/mypage/posts', {
    headers: {
      problemType: problemType,
    },
    params: {
      page: pageParam,
    },
  });

  console.log(response.data);
  return response.data;
};
