import styled from '@emotion/styled';
import { Colors, colors } from '@/styles/colorPalette';
import { ButtonColor, ButtonSize, buttonColorMap, buttonSizeMap } from '@/styles/button';

interface ButtonProp {
  width?: string;
  buttonType?: ButtonColor;
  size?: ButtonSize;
  bold?: boolean;
  hover?: Colors;
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
    background-color: ${({ hover = colors.yellowHover }) => hover};
  }
`;

export default StyledButton;
