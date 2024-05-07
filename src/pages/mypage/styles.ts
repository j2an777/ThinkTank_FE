import { colors } from '@/styles/colorPalette';
import { layoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${layoutMap.flexCenter}
  align-items: start;
  margin: 0 420px;
`;

export const Block = styled.div``;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

export const Subtitle = styled.div`
  color: ${colors.gray200};
  font-size: 20px;
  font-weight: 400;
  margin-top: 15px;
`;
