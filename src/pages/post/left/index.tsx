import { PostTestCaseBox } from '@/components/post';
import * as S from './styles';
import { DescriptionBox } from '@/components/shared';
import useSetFormData from '@/hooks/post/useSetFormData';

const PostLeft = () => {
  const { postForm } = useSetFormData();
  return (
    <S.Container>
      <DescriptionBox
        page="post"
        title={postForm.title}
        content={postForm.content}
        condition={postForm.condition}
        category="category"
      />
      <PostTestCaseBox />
    </S.Container>
  );
};

export default PostLeft;
