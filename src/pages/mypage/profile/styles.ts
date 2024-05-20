import { Icon } from '@/components/shared';
import { colors } from '@/styles/colorPalette';
import { layoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  ${layoutMap.flexCenter}
  margin: 70px auto;
  text-align: left;
  row-gap: 80px;
  max-width: 100%;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 800px;
  width: 100%;
  max-width: 1000px;
  row-gap: 15px;
`;

export const CancelIcon = styled(Icon)`
  position: absolute;
  top: -40px;
  right: 20vw;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Logout = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: ${colors.red};
`;
