import { ActiveBox, Container } from './styles'
import Icon, { IconValues } from '../icon';
import { useLike } from '@/hooks/like/useLike';

interface StatusProps {
  postId: number;
  likeCount : number;
  likeType : boolean;
  commentCount : number;
  answerCount : number;
}

export const Status = ({ postId, likeCount, likeType, commentCount, answerCount }: StatusProps) => {

  const { likeCount: updatedLikeCount, toggleLike, likeType: updatedLikeType } = useLike(postId, likeCount, likeType);

  // like 부분에서 likeType에 따라 yeslike, nolike IconValues 반환 위한 string 제공
  const iconValue: IconValues = updatedLikeType ? "yeslike" : "nolike";

  return (
    <>
      <InfoStatus value={iconValue} count={updatedLikeCount} onClick={toggleLike} />
      <InfoStatus value='comment' count={commentCount} />
      <InfoStatus value='check' count={answerCount} />
    </>
  );
};

interface InfoStatusProps {
    value: IconValues;
    count: number;
    onClick?: () => void;
}

const InfoStatus = ({ value, count, onClick }: InfoStatusProps) => {

  return (
    <Container>
      <ActiveBox value={value} onClick={onClick}>
        <Icon value={value} size={24}/>
      </ActiveBox>
        <p>{count}</p>
    </Container>
  )
}

export default InfoStatus