import { List } from '@/types/article';
import { getAuthAxios } from '../authAxios';

interface FetchParams {
  pageParam?: number;
  limit: number;
}

const fetchPosts = async ({ pageParam = 1, limit = 2 }: FetchParams): Promise<List> => {
  const access = localStorage.getItem('access');

  if (!access) {
    console.error('Access token is missing or invalid');
    throw new Error('Access token is missing or invalid');
  }

  const authAxios = getAuthAxios(access);
  
  try {
    const response = await authAxios.get<List>(
      `/api/posts?page=${pageParam}&limit=${limit}`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch posts');
  }
};

export default fetchPosts;
