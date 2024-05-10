import { Icon, Text } from '@/components/shared';
import { Comment } from '@/types/comment';
import getTimeDifference from '@/utils/getTimeDifference';

import * as S from './styles';
import UserCircle from '@/components/shared/UserCircle';

const CommentItem = ({ content, createdAt, user }: Comment) => {
  return (
    <S.Container>
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
};

export default CommentItem;
