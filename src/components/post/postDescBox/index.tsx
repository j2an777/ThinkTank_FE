import { CATEGORY } from '@/consts/category';
import { TextareaField } from '..';
import { Line, Select } from '@/components/shared';
import useSetFormData from '@/hooks/post/useSetFormData';

import * as S from './styles';

const PostDescBox = () => {
  // 이걸 상위 컴포넌트에서 내려주는 것으로 바꿔보자
  const { postForm, handleChange, updatePostForm } = useSetFormData();
  const handleChangeSelect = (value: string) => {
    updatePostForm({ category: value });
  };
  return (
    <S.Container>
      <Select optionData={CATEGORY} onChange={handleChangeSelect} />
      <S.ContentBox>
        <S.Title
          type="text"
          placeholder="제목을 입력해주세요"
          name="title"
          value={postForm.title}
          onChange={handleChange}
        />
        <TextareaField
          label="본문 내용"
          name="content"
          value={postForm.content}
          onChange={handleChange}
        />
        <Line />
        <TextareaField
          label="조건 내용"
          name="condition"
          value={postForm.condition}
          onChange={handleChange}
        />
      </S.ContentBox>
    </S.Container>
  );
};

export default PostDescBox;
