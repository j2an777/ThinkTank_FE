import { colors } from '@/styles/colorPalette';
import { layoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${layoutMap.flexCenter}
  align-items: start;
  margin: 70px 420px;
  text-align: left;
  row-gap: 110px;
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

export const Logout = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: ${colors.red};
`;
