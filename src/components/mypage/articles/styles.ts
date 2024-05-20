import { layoutMap } from '@/styles/layout';
import { typographyMap } from '@/styles/typography';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${layoutMap.flexCenter}
  gap: 40px;
  margin-top: 40px;
  width: 100%;
`;

export const Block = styled.div`
  width: 90%;
  min-width: 90%;
  display: flex;
  justify-content: start;
  box-sizing: border-box;
  min-height: 100px;
`;

export const Box = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0 500px;
`;

export const Title = styled.div`
  ${typographyMap.t1}
`;

export const Content = styled.div`
  ${typographyMap.t3}
`;
