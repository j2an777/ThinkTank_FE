import { useParams } from 'react-router-dom';
import DetailLeft from './left';
import DetailRight from './right';

import * as S from './styles';
import { postIdStore } from '@/stores/post';
import { useEffect } from 'react';

const DetailPage = () => {
  const { postId } = useParams();
  const updatePostId = postIdStore((state) => state.updatePostId);
  useEffect(() => {
    updatePostId(postId as string);
  }, [postId, updatePostId]);

  return (
    <S.Container>
      <DetailLeft />
      <DetailRight />
    </S.Container>
  );
};

export default DetailPage;
