import { ArticleDetail } from '@/types';
import instance from './instance';

export const postArticle = async (formData: ArticleDetail) => {
  const response = await instance.post('/api/post', formData);
  return response.data;
};

export const getArticle = async (postId: string) => {
  const response = await instance.get(`/api/posts/${postId}`);
  return response.data as ArticleDetail;
};

export const postCheck = async (
  formData: Pick<ArticleDetail, 'language' | 'answer'>,
  postId: string,
) => {
  const newFormData = {
    code: formData.answer,
    language: formData.language,
    postId,
  };
  const response = await instance.post('api/posts/submit', newFormData);
  return response.data;
};

interface FetchParams {
  pageParam?: number;
  limit: number;
}

export const getArticles = async ({
  pageParam = 1,
  limit = 2,
  email,
}: FetchParams): Promise<List> => {
  try {
    const response = await instance.get<List>(
      `/api/posts?page=${pageParam}&limit=${limit}`,
      {
        params: {
          email: email,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch posts');
  }
};
