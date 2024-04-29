import { useState } from 'react';
import { Icon, Text } from '../../shared';

import * as S from './styles';

const defalutValue = [{ parameters: '1234', return: '123' }];

const TestCaseBox = () => {
  const [testCases, setTestCases] =
    useState<{ parameters: string; return: string }[]>(defalutValue);
  return (
    <S.TestCaseContainer>
      <S.TitleBox>
        <Text typography="t2">테스트 케이스</Text>
        <Icon
          value="plus"
          onClick={() =>
            setTestCases((prev) => [...prev, { parameters: '', return: '' }])
          }
        />
      </S.TitleBox>
      <S.ContentBox>
        <Text>Parameters</Text>
        <Text>Return</Text>
        <S.TestBlock>
          {testCases.map((_, index) => (
            <input key={`parameters-${index}`} type="text" />
          ))}
        </S.TestBlock>
        <S.TestBlock>
          {testCases.map((_, index) => (
            <input key={`return-${index}`} type="text" />
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
