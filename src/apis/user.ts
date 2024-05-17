import { Login, SignUp, User } from '@/types';
import instance from './instance';
import axios from 'axios';

/** 로그인 **/
export const postLogin = async ({ email, password }: Login) => {
  const data = { email, password };
  try {
    const response = await instance.post('/api/login', data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      throw error;
    }
    throw error;
  }
};

/** 회원가입 */
export const postSignup = async (data: SignUp) => {
  const response = await instance.post('/api/signup', data);
  return response?.data;
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
