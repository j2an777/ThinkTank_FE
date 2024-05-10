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
  localStorage.removeItem('access');
  window.location.href = '/login';
};

/** 유저정보 수정 */
export const putUser = async () => {
  const access = localStorage.getItem('access');

  if (!access) {
    console.error('Access token is missing or invalid');
    throw new Error('Access token is missing or invalid');
  }

  const authAxios = getAuthAxios(access);
  const response = await authAxios.put('/api/mypage/users');
  console.log(response.data);
  return response.data;
};
