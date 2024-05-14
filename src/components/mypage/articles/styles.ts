import { layoutMap } from '@/styles/layout';
import { typographyMap } from '@/styles/typography';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${layoutMap.flexCenter}
  gap: 20px;
`;

export const Block = styled.div`
  ${layoutMap.shadowBox}
`;

export const Title = styled.div`
  ${typographyMap.t1}
`;

export const Content = styled.div`
  ${typographyMap.t3}
`;
