import styled from '@emotion/styled';
import { colors } from '@/styles/colorPalette';

interface ButtonProp {
  width?: string;
  background?: string;
  color?: string;
}

const StyledButton = styled.button<ButtonProp>`
  padding: 15px;
  width: ${({ width }) => width};
  border-radius: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ background }) => background || colors.yellow};
  color: ${({ color }) => color || 'white'};
  font-size: 20px;
  font-weight: 700;
`;

export default StyledButton;
