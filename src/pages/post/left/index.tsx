import { PostTestCaseBox } from '@/components/post';
import * as S from './styles';
import { DescriptionBox, Select } from '@/components/shared';
import useSetFormData from '@/hooks/post/useSetFormData';
import { CATEGORY } from '@/consts/category';

const PostLeft = () => {
  const {
    postForm: { title, content, condition },
    onChange,
    updatePostForm,
  } = useSetFormData();
  const onChangeSelect = (value: string) => {
    updatePostForm({ category: value });
  };
  return (
    <S.Container>
      <Select optionData={CATEGORY} onChange={onChangeSelect} />
      <DescriptionBox
        page="post"
        title={title}
        content={content}
        condition={condition}
        category="category"
        onChange={onChange}
      />
      <PostTestCaseBox />
    </S.Container>
  );
};

export default PostLeft;
