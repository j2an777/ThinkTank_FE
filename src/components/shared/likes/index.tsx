import { useCallback, useState } from "react";
import Icon from "../Icon"
import { ActiveBox, Container } from "./styles"
import { updateLike } from "@/apis";

interface LikesProps {
    postId: number;
    likeCount : number;
    likeType : boolean;
}

const Likes: React.FC<LikesProps> = ({ postId, likeCount, likeType }) => {
  const [nLikeCount, setNLikeCount] = useState(likeCount);
  const [nLikeType, setNLikeType] = useState(likeType);
  const [jellyAnimation, setJellyAnimation] = useState(false);

  const toggleLike = useCallback(async () => {
    // 선 렌더링 (animation, 좋아요 변화 반영)
    const newLikeType = !nLikeType;
    setNLikeType(newLikeType);
    setNLikeCount((prev) => (newLikeType ? prev + 1 : prev - 1));
    setJellyAnimation((prev) => !prev);

    setTimeout(() => {
      setJellyAnimation((prev) => !prev);
    }, 100);

    // 상태 업데이트
    try {
      await updateLike(postId);
    } catch (error) {
      console.log('실패', error);
      setNLikeType(nLikeType);
      setNLikeCount((prev) => (newLikeType ? prev - 1 : prev + 1));
    }
    // likeType과 postId값이 변하지 않는 이상 함수는 재생성 x
  }, [nLikeType, postId]);

  return (
    <Container>
      <ActiveBox onClick={toggleLike} className={jellyAnimation ? '' : 'jelly'}>
        <Icon value={nLikeType ? "yeslike" : "nolike"} />
      </ActiveBox>
      <p>{nLikeCount}</p>
    </Container>
  )
}

export default Likes;