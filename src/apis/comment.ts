import { CommemtDate } from '@/types/comment';
import instance from './instance';

export const getComments = async (postId: string) => {
  const response = await instance.get(`api/posts/${postId}/comments`);
  return response.data as CommemtDate[];
};
