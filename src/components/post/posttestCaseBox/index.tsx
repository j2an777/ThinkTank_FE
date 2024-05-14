import { ChangeEvent, useEffect, useState } from 'react';
import { Icon, Text } from '../../shared';
import { postFormStore } from '@/stores/post';
import { TestCase } from '@/types';

import * as S from './styles';

const defalutValue = [{ example: '', result: '' }];

const PostTestCaseBox = () => {
  const updatePostForm = postFormStore((state) => state.updatePostForm);
  const [testCases, setTestCases] = useState<TestCase[]>(defalutValue);
  useEffect(() => {
    updatePostForm({ testCases });
  }, [testCases, updatePostForm]);
  const handleChange = ({
    index,
    event,
  }: {
    index: number;
    event: ChangeEvent<HTMLTextAreaElement>;
  }) => {
    const { value, name } = event.target;
    const updateTestCase = testCases.map((testCases, i) => {
      if (index === i) {
        return { ...testCases, [name]: value };
      }
      return testCases;
    });
    setTestCases(updateTestCase);
    updatePostForm({ testCases: updateTestCase });
  };
  return (
    <S.TestCaseContainer>
      <S.TitleBox>
        <Text typography="t2">테스트 케이스</Text>
        <Icon
          value="plus"
          onClick={() => setTestCases((prev) => [...prev, { example: '', result: '' }])}
        />
      </S.TitleBox>
      <S.ContentBox>
        <Text>Example</Text>
        <S.TestBlock>
          {testCases.map((testCase, index) => (
            <textarea
              key={`example-${index}`}
              name="example"
              value={testCase.example}
              onChange={(event) => handleChange({ index, event })}
            />
          ))}
        </S.TestBlock>
        <Text>Return</Text>
        <S.TestBlock>
          {testCases.map((testCase, index) => (
            <textarea
              key={`result-${index}`}
              name="result"
              value={testCase.result}
              onChange={(event) => handleChange({ index, event })}
            />
          ))}
        </S.TestBlock>
      </S.ContentBox>
    </S.TestCaseContainer>
  );
};

export default PostTestCaseBox;

// post부분에서 detail부분을 구현해버림! 나중에 다시 만들어서 확인하자
