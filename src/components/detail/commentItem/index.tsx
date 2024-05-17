import { Icon, Text } from '@/components/shared';
import { Comment } from '@/types/comment';
import getTimeDifference from '@/utils/getTimeDifference';
import { ForwardedRef, forwardRef } from 'react';

import * as S from './styles';
import UserCircle from '@/components/shared/UserCircle';

const CommentItem = forwardRef<HTMLDivElement, Comment>(
  ({ content, createdAt, user }: Comment, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <S.Container ref={ref}>
        <UserCircle size={56} profileImage={user.profileImage} />
        <S.UserBox>
          <Text ellipsis={100}>{user.nickname}</Text>
          <Text typography="t4" color="gray300">
            {getTimeDifference(createdAt)}
          </Text>
        </S.UserBox>
        <Text css={S.contentCss}>{content}</Text>
        <Icon value="threedot" css={S.threedotCss} />
      </S.Container>
    );
  },
);

export default CommentItem;
