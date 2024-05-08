import { Login, SignUp } from '@/types/auth';
import { getAuthAxios } from './authAxios';

/** LOGIN API **/
export const postLogin = async ({ email, password }: Login) => {
  const data = { email, password };
  const authAxios = getAuthAxios();
  const response = await authAxios.post('/api/login', data);
  return response.data;
};

/** SIGNUP API */
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
  const authAxios = getAuthAxios();
  const response = await authAxios.post('/api/signup', data);
  return response.data;
};

export const logout = () => {
  // 로컬 스토리지에서 토큰 제거
  localStorage.removeItem('access');
  window.location.href = '/login';
};
