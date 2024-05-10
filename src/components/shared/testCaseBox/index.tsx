import { useState } from 'react';
import { Icon, Text } from '@/components/shared';
import { TestCase } from '@/types/post';

import * as S from './styles';

const TestCaseBox = ({ testCases }: { testCases: TestCase[] }) => {
  const [isExpand, setIsExpand] = useState<boolean>(true);
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
          {/* 여기부분을 어떻게 행야할지 잘 모르겠음..ㅠㅜ */}
          <S.TestBlock
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text>Example</Text>
            <Text>Return</Text>
          </S.TestBlock>
          {testCases.map(({ example, result }, index) => {
            return (
              <S.TestBlock key={index}>
                <textarea key={`example`} name="example" value={example} readOnly />
                <textarea key={`result`} name="result" value={result} readOnly />
              </S.TestBlock>
            );
          })}
        </S.ContentBox>
      )}
    </S.TestCaseContainer>
  );
};

export default TestCaseBox;
