import { Comment } from '@/types/comment';
import { CommentItem } from '..';

import * as S from './styles';

const defaultComment = {
  commentId: 1,
  createdAt: new Date('2024-05-02'),
  content:
    'asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf',
  user: {
    nickname: '아브라카타브라마이마이마이',
    profileImage: null,
  },
} as Comment;

const CommentList = () => {
  const mock = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <S.Container>
      {mock.map((_, index) => (
        <CommentItem key={index} {...defaultComment} />
      ))}
    </S.Container>
  );
};

export default CommentList;
