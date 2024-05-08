import styled from '@emotion/styled';
import { Colors, colors } from '@/styles/colorPalette';

interface ButtonProp {
  width?: string;
  background?: string;
  color?: Colors;
}

const StyledButton = styled.button<ButtonProp>`
  padding: 15px;
  width: ${({ width }) => width};
  border-radius: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ background = colors.yellow }) => background};
  color: ${({ color = 'white' }) => color};
  font-size: 20px;
  font-weight: 700;
`;

export default StyledButton;
