import styled from '@emotion/styled';
import { Colors } from '@/styles/colorPalette';
import {
  ButtonColor,
  ButtonSize,
  buttonActiveMap,
  buttonColorMap,
  buttonSizeMap,
} from '@/styles/button';

interface ButtonProp {
  width?: string;
  buttonType?: ButtonColor;
  size?: ButtonSize;
  bold?: boolean;
  hover?: Colors;
  resize?: string;
}

const StyledButton = styled.button<ButtonProp>`
  display: flex;
  ${({ size = 'medium' }) => buttonSizeMap[size]}
  ${({ buttonType = 'primary' }) => buttonColorMap[buttonType]}
  font-weight: ${({ bold = true }) => (bold ? 'bold' : null)};
  border-radius: 2em;
  justify-content: center;
  width: ${({ width = '300px' }) => width};

  &:hover {
    ${({ buttonType = 'primary' }) => buttonActiveMap[buttonType]}
  }
  transition: all 0.1s ease;
  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 900px) {
    width: ${({ resize = '200px' }) => resize};
  }
`;

export default StyledButton;
