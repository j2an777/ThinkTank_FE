import { AuthApi } from "../AuthAPI";

// 좋아요 수 업데이트 구문
const updateLike = async (postId: number): Promise<void> => {
    try {
        const response = await AuthApi.post('/api/like', postId);
        console.log('성공', response);
    } catch (error) {
        console.error('실패', error);
    }
};

export default updateLike;