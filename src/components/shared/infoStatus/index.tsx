import Icon, { IconValues } from '../icon';
import { useLike } from '@/hooks/like/useLike';
import { Text } from '..';
import { MouseEvent } from 'react';

import * as S from './styles';

interface StatusProps {
  postNumber: number;
  likeCount: number;
  likeType: boolean;
  commentCount: number;
  answerCount: number;
}

export const Status = ({
  postNumber,
  likeCount,
  likeType,
  commentCount,
  answerCount,
}: StatusProps) => {
  const {
    likeCount: updatedLikeCount,
    toggleLike,
    likeType: updatedLikeType,
  } = useLike(postNumber, likeCount, likeType);

  // like 부분에서 likeType에 따라 yeslike, nolike IconValues 반환 위한 string 제공
  const iconValue: IconValues = updatedLikeType ? 'yeslike' : 'nolike';

  return (
    <>
      <InfoStatus
        value={iconValue}
        count={updatedLikeCount}
        onClick={(e) => {
          e.stopPropagation();
          toggleLike();
        }}
      />
      <InfoStatus value="comment" count={commentCount} />
      <InfoStatus value="check" count={answerCount} />
    </>
  );
};

interface InfoStatusProps {
  value: IconValues;
  count: number;
  $active?: boolean;
  size?: number;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

const InfoStatus = ({ count, size = 24, ...props }: InfoStatusProps) => {
  return (
    <S.Container>
      <Icon size={size} {...props} />
      <Text typography="t3" color="gray300">
        {count}
      </Text>
    </S.Container>
  );
};

export default InfoStatus;
