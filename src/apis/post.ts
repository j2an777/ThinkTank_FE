import { PostForm } from '@/types/post';
import instance from './authAxios';

export const postProblem = async (formData: PostForm) => {
  const response = await instance.post('/api/post', formData);
  return response.data;
};

export const getProblem = async (postId: string) => {
  const response = await instance.get(`/api/posts/${postId}`);
  return response.data as PostForm;
};
