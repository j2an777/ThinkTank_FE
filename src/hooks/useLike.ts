import axios from "axios";
import { useCallback, useEffect, useState } from "react"

export const useLike = (postId: number, initialLikeCount: number, initialLikeType: boolean) => {
    const [likeCount, setLikeCount] = useState(initialLikeCount);
    const [likeType, setLikeType] = useState(initialLikeType);
    const [jellyAnimation, setJellyAnimation] = useState(false);

    useEffect(() => {
        setLikeType(initialLikeType);
    }, [initialLikeType]);

    const toggleLike = useCallback(async () => {

        // 선 렌더링 (animation, 좋아요 변화 반영)
        const newLikeType = !likeType;
        setLikeType(newLikeType);
        setLikeCount((prev) => (newLikeType ? prev + 1 : prev - 1));
        setJellyAnimation((prev) => !prev);
    
        setTimeout(() => {
          setJellyAnimation((prev) => !prev);
        }, 100);
    
        // 상태 업데이트
        try {
          const accessToken = localStorage.getItem('access_token');
          
          const response = await axios.post('/api/like', postId, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            }
          });
          console.log(response);
        } catch (error) {
          console.log(error);
        }
        // likeType과 postId값이 변하지 않는 이상 함수는 재생성 x
    }, [likeType, postId]);

    return { likeCount, likeType, jellyAnimation, toggleLike };
}