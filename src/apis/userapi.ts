import { Login, SignUp } from '@/types/auth';
import axios from 'axios';

/** LOGIN API **/
export const postLogin = async ({ email, password }: Login) => {
  const data = { email, password };
  const response = await axios.post(`/api/login`, data);
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
  const response = await axios.post(`/api/signup`, data);
  return response.data;
};
