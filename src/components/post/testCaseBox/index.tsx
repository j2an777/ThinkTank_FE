import { Icon, ShadowBox } from '../../shared';

import * as S from './styles';

const TestCaseBox = () => {
  return (
    <S.TestCaseContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <p>테스트 케이스</p> <Icon value="plus" />
      </div>
      <ShadowBox></ShadowBox>
    </S.TestCaseContainer>
  );
};

export default TestCaseBox;
