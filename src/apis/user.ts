import { Login, SignUp, User } from '@/types';
import instance from './instance';
import { AxiosError } from 'axios';

/* 회원가입 */
export const postSignup = async (data: SignUp) => {
  const response = await instance.post('/api/signup', data);
  return response?.data;
};

/* 로그인 */
export const postLogin = async (data: Login) => {
  try {
    const response = await instance.post('/api/login', data);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error;
    }
  }
};

/* 카카오 로그인 */
export const getKakaoLogin = async () => {
  const response = await instance.get('/api/login/oauth2/kakao');
  return response.data;
};

/* User 정보 불러오기 */
export const getUserInfo = async () => {
  try {
    const response = await instance.get('/api/mypage/users');
    return response.data as User;
  } catch {
    throw new Error('회원정보 불러오기 실패');
  }
};

/* User 정보 수정 */
export const putUser = async (data: Omit<User, 'email'>) => {
  const response = await instance.put('/api/mypage/users', data);
  return response.data;
};

/* 탈퇴 */
export const deleteUser = async () => {
  const response = await instance.delete('/api/mypage/users');
  return response.data;
};
