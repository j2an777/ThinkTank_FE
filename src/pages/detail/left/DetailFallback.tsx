import { ShadowBox, TestCaseBox, Text } from '@/components/shared';

import * as S from './styles';
import CircleLoader from '@/components/loader/circleLoader';

const DetailFallback = () => {
  return (
    <S.Container>
      <S.ContentBox>
        <Text typography="t2">{`category > title`}</Text>
        <ShadowBox css={S.fallbackContentCss}>
          <Text typography="t3" bold>
            title
          </Text>
          <CircleLoader />
        </ShadowBox>
      </S.ContentBox>
      <TestCaseBox testCases={[]} />
    </S.Container>
  );
};

export default DetailFallback;
