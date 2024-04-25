import { DescriptionBox, TestCaseBox } from '../../../components/post';
import * as s from './styles';

const PostLeft = () => {
  return (
    <s.Container>
      <DescriptionBox />
      <TestCaseBox />
    </s.Container>
  );
};

export default PostLeft;
