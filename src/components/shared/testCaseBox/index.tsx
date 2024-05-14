import { useState } from 'react';
import { Icon, Text } from '@/components/shared';
import { TestCase } from '@/types';
import { animationMap } from '@/styles/framerMotion';

import * as S from './styles';

const TestCaseBox = ({ testCases }: { testCases: TestCase[] }) => {
  const [isExpand, setIsExpand] = useState<boolean>(true);
  return (
    <S.TestCaseContainer
      key="parent"
      variants={animationMap.testContainerAnimation}
      initial="open"
      animate={isExpand ? 'open' : 'close'}
    >
      <S.TitleBox>
        <Text typography="t2">테스트 케이스</Text>
        <Icon
          value="arrow"
          $active={false}
          $rotate={isExpand}
          onClick={() => setIsExpand((prev) => !prev)}
        />
      </S.TitleBox>
      {isExpand && (
        <S.ContentBox
          key="children"
          variants={animationMap.testContneBoxAnimation}
          initial="close"
          animate={isExpand ? 'open' : 'close'}
          exit="exit"
        >
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
