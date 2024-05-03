import styled from '@emotion/styled';
import { Typograph, typographyMap } from '../../styles/typography';
import { Colors, colors } from '@/styles/colorPalette';
import { css } from '@emotion/react';

interface TextProps {
  typography?: Typograph;
  bold?: boolean;
  color?: Colors;
  ellipsis?: number;
}

const Text = styled.p<TextProps>`
  ${({ typography = 't3' }) => typographyMap[typography]}
  font-weight: ${({ bold = false }) => (bold ? 'bold' : null)};
  color: ${({ color = 'black' }) => colors[color]};
  ${({ ellipsis }) => css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: ${ellipsis}px;
  `}
`;

export default Text;
