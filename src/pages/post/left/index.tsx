import { PostDescBox, TestCaseBox } from '@/components/post';
import * as S from './styles';

const PostLeft = () => {
  return (
    <S.Container>
      <PostDescBox />
      <TestCaseBox />
    </S.Container>
  );
};

export default PostLeft;
