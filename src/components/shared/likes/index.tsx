import Icon from "../Icon"
import { ActiveBox, Container } from "./styles"
import { useLike } from "@/hooks/useLike";

interface LikesProps {
    postId: number;
    likeCount : number;
    likeType : boolean;
}

const Likes: React.FC<LikesProps> = ({ postId, likeCount: initialLikeCount, likeType: initialLikeType }) => {

  const { likeCount, likeType, jellyAnimation, toggleLike } = useLike( postId, initialLikeCount, initialLikeType );

  return (
    <Container>
      <ActiveBox onClick={toggleLike} className={jellyAnimation ? '' : 'jelly'}>
        <Icon value={likeType ? "yeslike" : "nolike"} />
      </ActiveBox>
      <p>{likeCount}</p>
    </Container>
  )
}

export default Likes;