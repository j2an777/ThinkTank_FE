import { List } from '@/types/article';
import { getAuthAxios } from '../authAxios';

interface FetchParams {
  pageParam?: number;
  limit: number;
  userId?: string;
}

const fetchPosts = async ({ pageParam = 1, limit = 2, userId }: FetchParams): Promise<List> => {
  const access = localStorage.getItem('access');

  if (!access) {
    console.error('Access token is missing or invalid');
    throw new Error('Access token is missing or invalid');
  }

  const authAxios = getAuthAxios(access);
  
  try {
    const response = await authAxios.get<List>(
      `/api/posts?page=${pageParam}&limit=${limit}&userId=${userId}`, {
        params: {
          userId: userId
        }
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch posts');
  }
};

export default fetchPosts;
