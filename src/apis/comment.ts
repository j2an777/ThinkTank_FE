import { CommentDate } from '@/types/comment';
import instance from './instance';

export const getComments = async (postId: string) => {
  const response = await instance.get(`api/posts/${postId}/comments`);
  return response.data as CommentDate[];
};

export const postComment = async (comment: string, postId: string) => {
  const response = await instance.post('/api/comments', { postId, content: comment });
  return response.data;
};
