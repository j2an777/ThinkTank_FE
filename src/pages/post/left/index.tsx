import { PostTestCaseBox } from '@/components/post';
import * as S from './styles';
import { DescriptionBox } from '@/components/shared';
import useSetFormData from '@/hooks/post/useSetFormData';

const PostLeft = () => {
  const { postForm, handleChange, updatePostForm } = useSetFormData();
  const handleCategurySelect = (value: string) => {
    updatePostForm({ category: value });
  };
  return (
    <S.Container>
      <DescriptionBox
        postNumber={postForm.postNumber}
        page="post"
        title={postForm.title}
        content={postForm.content}
        condition={postForm.condition}
        category="category"
        onChange={handleChange}
        categorySelect={handleCategurySelect}
      />
      <PostTestCaseBox />
    </S.Container>
  );
};

export default PostLeft;
