import { CATEGORY } from '@/consts/category';
import { TextareaField } from '..';
import { Line, Select } from '@/components/shared';
import useSetFormData from '@/hooks/post/useSetFormData';

import * as S from './styles';

const DescriptionBox = () => {
  const { postForm, handleChange, updatePostForm } = useSetFormData();
  const handleChangeSelect = (value: string) => {
    updatePostForm({ category: value });
  };
  return (
    <S.Container>
      <Select optionData={CATEGORY} onChnage={handleChangeSelect} />
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

export default DescriptionBox;
