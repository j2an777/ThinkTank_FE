import styled from '@emotion/styled';
import { formBaseCss } from '../descriptonBox/styles';
import { colors } from '@/styles/colorPalette';

export const Container = styled.div<{ hasFocus: boolean }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  > label {
    font-size: 20px;
    font-weight: bold;
    color: ${({ hasFocus }) =>
      hasFocus ? `${colors.yellowActive}` : `${colors.gray50}`};
  }
  > textarea {
    ${formBaseCss}
    resize: none;
    flex: 1;
  }
`;
