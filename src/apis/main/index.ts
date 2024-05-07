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
      `https://baa4852a-d5cb-4d7d-9716-715686200726.mock.pstmn.io/api/posts?page=${pageParam}&limit=${limit}`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch posts');
  }
};

export default fetchPosts;
