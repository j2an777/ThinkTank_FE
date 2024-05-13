import { updateLike } from "@/apis";
import { useCallback, useState } from "react"

export const useLike = (postId: number, initialLikeCount: number, initialLikeType: boolean) => {
  
    // 캐시 데이터 -> 지역 데이터로 관리이기 때문에 리액트 쿼리를 활용하여 캐시데이터로 관리 및 바로 db로 업데이트 시키도록 구현
    const [likeCount, setLikeCount] = useState(initialLikeCount);
    const [likeType, setLikeType] = useState(initialLikeType);
    const [jellyAnimation, setJellyAnimation] = useState(false);

    const toggleLike = useCallback(async () => {
        
        if (typeof postId !== 'number') {
          console.error("postId is undefined, toggleLike will not execute.");
          return;
        }

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
          await updateLike(postId);
        } catch (error) {
          console.log(error);
          // setLikeType(likeType);
          // setLikeCount((prev) => (newLikeType ? prev - 1 : prev + 1));
        }
        // likeType과 postId값이 변하지 않는 이상 함수는 재생성 x
    }, [likeType, postId]);

  return { likeCount, likeType, jellyAnimation, toggleLike };
};