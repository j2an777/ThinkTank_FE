import styled from '@emotion/styled';
import { Colors, colors } from '@/styles/colorPalette';
import { layoutMap } from '@/styles/layout';
import { Typograph, typographyMap } from '@/styles/typography';

interface ButtonProp {
  width?: string;
  background?: string;
  color?: Colors;
  typography?: Typograph;
  hover?: Colors;
}

const StyledButton = styled.button<ButtonProp>`
  ${layoutMap.styledButton}
  width: ${({ width = '300px' }) => width};
  background: ${({ background = colors.yellow }) => background};
  color: ${({ color = 'white' }) => color};
  ${({ typography = 't1' }) => typographyMap[typography]}

  &:hover {
    background-color: ${({ hover = colors.yellowHover }) => hover};
  }
`;

export default StyledButton;
