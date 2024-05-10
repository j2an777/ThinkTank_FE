import { PostForm } from '@/types/post';
import { getAuthAxios } from './authAxios';

export const postProblem = async (formData: PostForm) => {
  const access = localStorage.getItem('access');
  if (!access) {
    console.error('Access token is missing or invalid');
    throw new Error('Access token is missing or invalid');
  }
  const authAxios = getAuthAxios(access);
  const response = await authAxios.post('/api/post', formData);
  return response.data;
};

export const getProblem = async (postId: string) => {
  const access = localStorage.getItem('access');
  if (!access) {
    console.error('Access token is missing or invalid');
    throw new Error('Access token is missing or invalid');
  }
  const authAxios = getAuthAxios(access);
  const response = await authAxios.get(`/api/posts/${postId}`);
  return response.data as PostForm;
};
