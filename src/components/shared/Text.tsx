import styled from '@emotion/styled';
import { Typograph, typographyMap } from '../../styles/typography';

interface TextProps {
  typography?: Typograph;
  bold?: boolean;
}

const Text = styled.p<TextProps>`
  ${({ typography = 't3' }) => typographyMap[typography]}
  font-weight: ${({ bold = false }) => (bold ? 'bold' : null)};
`;

export default Text;
