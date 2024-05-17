import styled from '@emotion/styled';
import { Typograph, typographyMap } from '../../styles/typography';
import { Colors, colors } from '@/styles/colorPalette';
import { css } from '@emotion/react';

interface TextProps {
  typography?: Typograph;
  bold?: Typograph;
  color?: Colors;
  ellipsis?: number;
}

const Text = styled.p<TextProps>`
  ${({ typography = 't3' }) => typographyMap[typography]};
  ${({ bold = 'semibold' }) => typographyMap[bold]};
  color: ${({ color = 'black' }) => colors[color]};
  ${({ ellipsis }) => css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: ${ellipsis}px;
  `}
`;

export default Text;
