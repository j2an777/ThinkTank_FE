import styled from '@emotion/styled';
import { colors } from '../../../styles/colorPalette';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 800px;
  position: relative;
  height: 100vh;
  border-right: 1px solid ${colors.gray50};
`;
