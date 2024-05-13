import { CommentItem } from '..';
import { postIdStore } from '@/stores/post';
import useGetComments from '@/hooks/detail/useGetComments';

import * as S from './styles';

const CommentList = () => {
  const postId = postIdStore((state) => state.postId);
  const { data } = useGetComments(postId);
  return (
    <S.Container>
      {data?.comments.map((comment, index) => <CommentItem key={index} {...comment} />)}
    </S.Container>
  );
};

export default CommentList;
