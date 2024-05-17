import { ArticleDetail, ArticleList } from '@/types';
import instance from './instance';

export const getArticle = async (postId: string) => {
  const response = await instance.get(`/api/posts/${postId}`);
  return response.data as ArticleDetail;
};

interface FetchParams {
  pageParam?: number;
  size: number;
}

export const getArticles = async ({ pageParam = 1, size }: FetchParams) => {
  const response = await instance.get('/api/posts', {
    params: {
      page: pageParam,
      size,
    },
  });
  return response.data as ArticleList;
};

export const postArticle = async (
  formData: Omit<
    ArticleDetail,
    'postNumber' | 'commentCount' | 'likeCount' | 'answerCount' | 'likeType'
  >,
) => {
  const response = await instance.post('/api/posts', formData);
  return response?.data;
};

export const postCheck = async (
  formData: Pick<ArticleDetail, 'language' | 'code'>,
  postId: string,
) => {
  const newFormData = {
    code: formData.code,
    language: formData.language,
    postId,
  };
  const response = await instance.post('api/posts/submit', newFormData);
  return response.data;
};
