import { useEffect, useState } from "react";
import Icon from "../Icon"
import { ActiveBox, Container } from "./styles"
import axios from "axios";

interface LikesProps {
    postId: number;
    likeCount : number;
    likeType : boolean;
}

const Likes: React.FC<LikesProps> = ({ postId, likeCount, likeType }) => {

  const [currentCount, setCurrentCount] = useState(likeCount);
  const [likeToggle, setLikeToggle] = useState<boolean>();
  const [jellyAnimation, setJellyAnimation] = useState(false);

  // likeType에 따라 likeToggle 초기 상태 설정
  useEffect(() => {
    likeType === true ? setLikeToggle(true) : setLikeToggle(false);
  }, [likeType]);
  
  const onHandleLike = async () => {
    // 1. 클릭에 대한 좋아요 렌더링
    setLikeToggle(!likeToggle);
    setTimeout(() => {
      setJellyAnimation(!jellyAnimation);
    }, 100);

    // like 값 +1, -1 렌더링
    if (likeToggle) {
      setCurrentCount(currentCount - 1);
    } else {
      setCurrentCount(currentCount + 1);
    }

    // 상태 업데이트
    try {
      // 로그인 시 로컬스토리지에 저장한 accessToken 가져오기
      const accessToken = localStorage.getItem('access_token');
      
      const response = await axios.post('/api/like', postId, {
        headers: {
          Authorization : `Bearer as ${accessToken}`,
        }
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <ActiveBox onClick={onHandleLike} className={jellyAnimation ? '' : 'jelly'}>
        <Icon value={likeToggle ? "yeslike" : "nolike"} />
      </ActiveBox>
      <p>{currentCount}</p>
    </Container>
  )
}

export default Likes;