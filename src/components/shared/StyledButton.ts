import styled from '@emotion/styled';
import { colors } from '@/styles/colorPalette';

interface ButtonProp {
  width?: string;
}

const StyledButton = styled.button<ButtonProp>`
  padding: 15px;
  width: ${({ width }) => width};
  border-radius: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.yellow};
  color: white;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;

export default StyledButton;
