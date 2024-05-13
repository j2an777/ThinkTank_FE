import { Login, SignUp } from '@/types/auth';
import instance from './authAxios';

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

/** 로그아웃 */
export const logout = () => {
  localStorage.removeItem('access');
  localStorage.removeItem('userId');
  window.location.href = '/';
};
