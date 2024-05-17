import styled from '@emotion/styled';
import { colors } from '@/styles/colorPalette';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 800px;
  height: 100vh;
  border-right: 1px solid ${colors.gray50};

  > :first-of-type {
    padding: 20px;
  }
`;
