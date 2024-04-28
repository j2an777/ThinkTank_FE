import styled from '@emotion/styled';
import { colors } from '@/styles/colorPalette';

export const Label = styled.div<{ hasFocus: boolean }>`
  color: ${(props) => (props.hasFocus ? `${colors.yellow}` : `${colors.gray100}`)};
`;

export const Input = styled.input<{ hasFocus: boolean }>`
  width: 100%;
  padding: 8px 16px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 2em;
  border: 1px solid
    ${(props) => (props.hasFocus ? `${colors.yellow}` : `${colors.gray100}`)};
  outline: none;
`;

export const Error = styled.div`
  position: absolute;
  color: ${colors.red};
`;
