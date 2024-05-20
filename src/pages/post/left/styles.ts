import styled from '@emotion/styled';
import { colors } from '@/styles/colorPalette';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${colors.gray50};
  min-width: 600px;
  width: 800px;
  height: 100vh;

  > :first-of-type {
    padding: 20px;
  }
`;
