import { Line, Text } from '@/components/shared';

import * as S from './styles';

const DetailDescBox = () => {
  const value = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa\nasdfasdfasdf';
  return (
    <S.Container>
      <Text typography="t2">{`알고리즘 > 문제 제목`}</Text>
      <S.ContentBox>
        <Text typography="t3" bold>
          문제 제목
        </Text>
        <p dangerouslySetInnerHTML={{ __html: value }}></p>
        <Line />
        <textarea readOnly={true} value={value} />
      </S.ContentBox>
    </S.Container>
  );
};

export default DetailDescBox;
