import { layoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

interface ShadowBoxProp {
  padding?: number;
  height?: number;
}

const ShadowBox = styled.div<ShadowBoxProp>`
  ${layoutMap.shadowBox}
  padding: ${({ padding = 20 }) => padding}px;
  height: ${({ height }) => height}px;
`;

export default ShadowBox;
