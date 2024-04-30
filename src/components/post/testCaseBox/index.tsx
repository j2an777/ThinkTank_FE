import { ChangeEvent, useEffect, useState } from 'react';
import { Icon, Text } from '../../shared';

import * as S from './styles';
import { postFormStore } from '@/stores/post';
import { TestCase } from '@/types/post';

const defalutValue = [{ example: '', return: '' }];

const TestCaseBox = () => {
  const updatePostForm = postFormStore((state) => state.updatePostForm);
  const [testCase, setTestCases] = useState<TestCase[]>(defalutValue);
  useEffect(() => {
    updatePostForm({ testCase });
  }, [testCase, updatePostForm]);
  const handleChange = ({
    index,
    event,
  }: {
    index: number;
    event: ChangeEvent<HTMLTextAreaElement>;
  }) => {
    const { value, name } = event.target;
    const updateTestCase = testCase.map((testCase, i) => {
      if (index === i) {
        return { ...testCase, [name]: value };
      }
      return testCase;
    });
    console.log(updateTestCase);
    // setTestCases(updateTestCase);
    updatePostForm({ testCase: updateTestCase });
  };
  return (
    <S.TestCaseContainer>
      <S.TitleBox>
        <Text typography="t2">테스트 케이스</Text>
        <Icon
          value="plus"
          onClick={() => setTestCases((prev) => [...prev, { example: '', return: '' }])}
        />
      </S.TitleBox>
      <S.ContentBox>
        <Text>Example</Text>
        <S.TestBlock>
          {testCase.map((testCase, index) => (
            <textarea
              key={`parameters-${index}`}
              name="example"
              value={testCase.example}
              onChange={(event) => handleChange({ index, event })}
            />
          ))}
        </S.TestBlock>
        <Text>Return</Text>
        <S.TestBlock>
          {testCase.map((testCase, index) => (
            <textarea
              key={`return-${index}`}
              name="return"
              value={testCase.return}
              onChange={(event) => handleChange({ index, event })}
            />
          ))}
        </S.TestBlock>
      </S.ContentBox>
    </S.TestCaseContainer>
  );
};

export default TestCaseBox;

// post부분에서 detail부분을 구현해버림! 나중에 다시 만들어서 확인하자
// const TestCaseBox = () => {
//   const [isExpand, setIsExpand] = useState<boolean>(false);
//   return (
//     <S.TestCaseContainer>
//       <S.TitleBox>
//         <Text typography="t2">테스트 케이스</Text>
//         <Icon
//           value="arrow"
//           rotate={isExpand}
//           onClick={() => setIsExpand((prev) => !prev)}
//         />
//       </S.TitleBox>
//       {isExpand && <ShadowBox></ShadowBox>}
//     </S.TestCaseContainer>
//   );
// };
