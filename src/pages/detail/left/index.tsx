import { DescriptionBox, TestCaseBox } from '@/components/shared';

import * as S from './styles';

const defalutPostForm = {
  category: 'category',
  title: 'title',
  content: 'content',
  condition: 'condition',
  testCase: [],
  language: 'java',
  answer: 'answer',
};

const DetailLeft = () => {
  return (
    <S.Container>
      <DescriptionBox page="detail" {...defalutPostForm} />
      <TestCaseBox
        testCase={[
          { example: '1 2', result: '3' },
          { example: '1 2', result: '3' },
          { example: '1 2', result: '3' },
        ]}
      />
    </S.Container>
  );
};

export default DetailLeft;
