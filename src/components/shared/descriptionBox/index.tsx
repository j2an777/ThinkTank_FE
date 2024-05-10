import { Line, Select, Text } from '@/components/shared';

import * as S from './styles';
import { PostForm } from '@/types/post';
import { TextareaField } from '@/components/post';
import { CATEGORY } from '@/consts/category';
import { ChangeEvent } from 'react';

type DescriptonForm = Omit<PostForm, 'testCases' | 'language' | 'answer'>;

type DescriptionBoxProps = {
  page: 'post' | 'detail';
  onChange?: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  categorySelect?: (value: string) => void;
} & DescriptonForm;

const DescriptionBox = (props: DescriptionBoxProps) => {
  return <S.Container>{renderComponent(props)}</S.Container>;
};

// 조건에 따라 컴포넌트를 랜더링 함 (detail과 post 두가지 page에서 모두 사용 가능)
const renderComponent = ({
  page,
  category,
  title,
  content,
  condition,
  onChange,
  categorySelect,
}: DescriptionBoxProps) => {
  switch (page) {
    case 'detail':
      return (
        <>
          <Text typography="t2">{`${category} > ${title}`}</Text>
          <S.DetailContentBox>
            <Text typography="t3" bold>
              {title}
            </Text>
            <textarea readOnly={true} value={content} />
            <Line />
            <textarea readOnly={true} value={condition} />
          </S.DetailContentBox>
        </>
      );
    case 'post':
      return (
        <>
          <Select
            optionData={CATEGORY}
            onChange={categorySelect as (value: string) => void}
          />
          <S.PostContentBox>
            <S.Title
              type="text"
              placeholder="제목을 입력해주세요"
              name="title"
              value={title}
              onChange={onChange as (event: ChangeEvent<HTMLInputElement>) => void}
            />
            <TextareaField
              label="본문 내용"
              name="content"
              value={content}
              onChange={onChange as (event: ChangeEvent<HTMLTextAreaElement>) => void}
            />
            <Line />
            <TextareaField
              label="조건 내용"
              name="condition"
              value={condition}
              onChange={onChange as (event: ChangeEvent<HTMLTextAreaElement>) => void}
            />
          </S.PostContentBox>
        </>
      );
  }
};

export default DescriptionBox;
