import PostLeft from './left';
import PostRight from './right';

import * as S from './styles';

const PostPage = () => {
  return (
    <S.Container>
      <PostLeft />
      <PostRight />
    </S.Container>
  );
};

export default PostPage;
