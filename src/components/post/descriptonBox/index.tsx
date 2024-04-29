import { CATEGORY } from '@/consts/category';
import { TextareaField } from '..';
import { Line, Select } from '../../shared';

import * as S from './styles';

const DescriptionBox = () => {
  return (
    <S.Container>
      <Select optionData={CATEGORY} />
      <S.ContentBox>
        <S.Title type="text" placeholder="제목을 입력해주세요" required />
        <TextareaField label="본문 내용" />
        <Line />
        <TextareaField label="조건 내용" />
      </S.ContentBox>
    </S.Container>
  );
};

export default DescriptionBox;
