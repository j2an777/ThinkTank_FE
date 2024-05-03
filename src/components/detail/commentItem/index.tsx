import { Icon, Text, UserCircle } from '@/components/shared';
import { Comment } from '@/types/comment';
import getTimeDifference from '@/utils/getTimeDifference';

import * as S from './styles';

const CommentItem = ({ commentId, content, createdAt, user }: Comment) => {
  return (
    <S.Container>
      <UserCircle size={56} profileImage={user.profileImage} />
      <S.UserBox>
        <Text ellipsis={100}>{user.nickName}</Text>
        <Text typography="t4" color="gray300">
          {getTimeDifference(createdAt)}
        </Text>
      </S.UserBox>
      <Text css={S.contentCss}>{content}</Text>
      <Icon value="threedot" css={S.threedotCss} />
    </S.Container>
  );
};

export default CommentItem;
