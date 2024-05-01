import axios from "axios";


const accessToken = localStorage.getItem('access_token');

// 좋아요 수 업데이트 구문
const updateLike = async (postId: number): Promise<void> => {
    try {
        const response = await axios.post('/api/like', {
            postId
        }, {
            headers: {
                Authorization: `Bearer as ${accessToken}`,
            }
        });
        console.log('성공', response);
    } catch (error) {
        console.error('실패', error);
    }
};

export default updateLike;