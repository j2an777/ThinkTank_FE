import { DescriptionBox, TestCaseBox } from '../../../components/post';
import * as S from './styles';

const PostLeft = () => {
  return (
    <S.Container>
      <DescriptionBox />
      <TestCaseBox />
    </S.Container>
  );
};

export default PostLeft;
