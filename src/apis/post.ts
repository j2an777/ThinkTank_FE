import { ArticleList, ArticleDetail } from '@/types';
import instance from './instance';

export const postArticle = async (formData: ArticleDetail) => {
  const response = await instance.post('/api/posts', formData);
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
  pageParam: number;
  size: number;
}

export const getArticles = async ({
  pageParam = 1,
  size,
}: FetchParams) => {
  const response = await instance.get(`/api/posts`, {
    params: {
      size: size,
      page: pageParam,
    }
  });
  return response.data as ArticleList;
};
