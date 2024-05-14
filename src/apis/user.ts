import { Login, SignUp, User } from '@/types';
import instance from './instance';

/** 로그인 **/
export const postLogin = async ({ email, password }: Login) => {
  const data = { email, password };
  const response = await instance.post('/api/login', data);
  return response.data;
};

/** 회원가입 */
export const postSignup = async ({
  email,
  nickname,
  password,
  checkPassword,
  github,
  blog,
  introduce,
  profileImage,
}: SignUp) => {
  const data = {
    email,
    password,
    checkPassword,
    nickname,
    github,
    blog,
    introduce,
    profileImage,
  };
  const response = await instance.post('/api/signup', data);
  return response.data;
};

/** 로그아웃 이거는 나중에 component 안에서 구현해주세요*/
export const logout = () => {
  localStorage.removeItem('access');
  localStorage.removeItem('userId');
  window.location.href = '/';
};

/** User 정보 불러오기 */
export const getUserInfo = async () => {
  const response = await instance.get('/api/mypage/users');
  console.log(response.data);
  return response.data as User;
};

/** User 정보 수정 */
export const putUser = async (data: Omit<User, 'email'>) => {
  const response = await instance.put('/api/mypage/users', data);
  console.log(response.data);
  return response.data;
};
