import { layoutMap } from '@/styles/layout';
import { typographyMap } from '@/styles/typography';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${layoutMap.flexCenter}
  gap: 40px;
  margin-top: 40px;
`;

export const Block = styled.div`
  ${layoutMap.shadowBox}
  display: flex;
  gap: 30px;
  @media (min-width: 1050px) {
    min-width: 950px;
  }
  @media (max-width: 1049px) {
    min-width: 750px;
  }
`;

export const Box = styled.div`
  ${layoutMap.shadowBox}
  display: flex;
  gap: 30px;
  @media (min-width: 1050px) {
    min-width: 950px;
  }
  @media (max-width: 1049px) {
    min-width: 750px;
  }
`;

export const Title = styled.div`
  ${typographyMap.t1}
`;

export const Content = styled.div`
  ${typographyMap.t3}
`;
