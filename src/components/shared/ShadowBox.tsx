import styled from '@emotion/styled';

interface ShadowBoxProp {
  padding?: number;
  height?: number;
}

const ShadowBox = styled.div<ShadowBoxProp>`
  padding: ${({ padding = 20 }) => padding}px;
  height: ${({ height }) => height}px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

export default ShadowBox;
