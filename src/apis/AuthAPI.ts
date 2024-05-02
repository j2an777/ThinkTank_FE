import { Login, SignUp } from '@/types/auth';
import axios from 'axios';

const ACCESS_TOKEN = localStorage.getItem('accessToken');

/** CUSTOM AXIOS INSTANCE */
export const AuthApi = axios.create({
  baseURL: 'http://211.206.94.24:9999',
  headers: {
    'Content-Type': 'application/json',
    access: `Bearer ${ACCESS_TOKEN}`,
  },
});

/** LOGIN API **/
export const postLogin = async ({ email, password }: Login) => {
  const data = { email, password };
  const response = await AuthApi.post(`/api/login`, data);
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
}: SignUp) => {
  const data = { email, password, checkPassword, nickname, github, blog, introduce };
  const response = await AuthApi.post(`/api/signup`, data);
  return response.data;
};

/** MYPAGE API */
export const getMyPage = async () => {
  const response = await AuthApi.get(`/api/mypage`);
  return response.data;
};
