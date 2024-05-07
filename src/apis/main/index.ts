import { List } from "@/types/article";
import { AuthApi } from "../AuthAPI";

interface FetchParams {
    pageParam?: number;
    limit : number;
}

const fetchPosts = async ({ pageParam = 1, limit = 2 }: FetchParams): Promise<List> => {
    try {
        const response = await AuthApi.get<List>(`https://baa4852a-d5cb-4d7d-9716-715686200726.mock.pstmn.io/api/posts?page=${pageParam}&limit=${limit}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch posts');
    }
};

export default fetchPosts;