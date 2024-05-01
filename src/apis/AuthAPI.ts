import { Login, SignUp } from '@/types/auth';
import axios from 'axios';

const TOKEN_TYPE = localStorage.getItem('tokenType');
const ACCESS_TOKEN = localStorage.getItem('accessToken');
//const REFRESH_TOKEN = localStorage.getItem('refreshToken');

/** CUSTOM AXIOS INSTANCE */
export const AuthApi = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${TOKEN_TYPE} ${ACCESS_TOKEN}`,
  },
});

/** LOGIN API */
export const login = async ({ email, password }: Login) => {
  const data = { email, password };
  const response = await AuthApi.post(`/api/login`, data);
  return response.data;
};

/** SIGNUP API */
export const postSignup = async ({
  email,
  password,
  nickname,
  github,
  blog,
  introduce,
}: SignUp) => {
  const data = { email, password, nickname, github, blog, introduce };
  const response = await axios.post(`/api/signup`, data);
  return response.data;
};
