import { Icon, ShadowBox } from '../../shared';

import * as s from './styles';

const TestCaseBox = () => {
  return (
    <s.TestCaseContainer>
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
    </s.TestCaseContainer>
  );
};

export default TestCaseBox;
