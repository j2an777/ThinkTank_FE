import { ChangeEvent, useEffect, useState } from 'react';
import { Icon, Text } from '../../shared';
import { postFormStore } from '@/stores/post';
import { TestCase } from '@/types';

import * as S from './styles';
import TestCaseItem from '../tesCaseItem';

const defalutValue = [{ example: '', result: '' }];

const PostTestCaseBox = () => {
  const updatePostForm = postFormStore((state) => state.updatePostForm);
  const [testCases, setTestCases] = useState<TestCase[]>(defalutValue);
  const onChangeTestCase = ({
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
  const onDeleteTestCase = (index: number) => {
    if (testCases.length > 1) {
      const updateTestCase = testCases.filter((_, i) => i !== index);
      setTestCases(updateTestCase);
      updatePostForm({ testCases: updateTestCase });
    }
  };
  useEffect(() => {
    updatePostForm({ testCases });
  }, [testCases, updatePostForm]);

  return (
    <S.Container>
      <S.TitleBox>
        <Text typography="t2">테스트 케이스</Text>
        <Icon
          value="plus"
          onClick={() => setTestCases((prev) => [...prev, { example: '', result: '' }])}
        />
      </S.TitleBox>
      <S.ContentBox>
        <S.TestCaseTitleBlock>
          <Text>Example</Text>
          <Text>Return</Text>
        </S.TestCaseTitleBlock>
        {testCases.map((testCase, index) => {
          return (
            <TestCaseItem
              key={index}
              index={index}
              testCase={testCase}
              onChange={onChangeTestCase}
              onDelete={onDeleteTestCase}
            />
          );
        })}
      </S.ContentBox>
    </S.Container>
  );
};

export default PostTestCaseBox;

// post부분에서 detail부분을 구현해버림! 나중에 다시 만들어서 확인하자
