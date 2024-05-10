import { colors } from '@/styles/colorPalette';
import { layoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Block = styled.div`
  ${layoutMap.flexCenter}
  flex: 1;
`;

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

export const Box = styled.div`
  position: sticky;
  width: 350px;
  height: 100%;
`;
