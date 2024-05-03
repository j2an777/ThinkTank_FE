import { useState } from 'react';
import { Icon, Text } from '@/components/shared';

import * as S from './styles';

const DetailTestCase = () => {
  const [isExpand, setIsExpand] = useState<boolean>(false);
  return (
    <S.TestCaseContainer>
      <S.TitleBox>
        <Text typography="t2">테스트 케이스</Text>
        <Icon
          value="arrow"
          $rotate={isExpand}
          onClick={() => setIsExpand((prev) => !prev)}
        />
      </S.TitleBox>
      {isExpand && (
        <S.ContentBox>
          <Text>Example</Text>
          <S.TestBlock>
            <textarea key={`example`} name="example" />
          </S.TestBlock>
          <Text>Return</Text>
          <S.TestBlock>
            <textarea key={`return`} name="return" />
          </S.TestBlock>
        </S.ContentBox>
      )}
    </S.TestCaseContainer>
  );
};

export default DetailTestCase;
// const TestCaseBox = () => {

// };
