import styled from '@emotion/styled';
import { colors } from '@/styles/colorPalette';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
`;

export const Circle = styled.div<{ x: number; y: number }>`
  position: absolute;
  left: ${(props) => props.x}vw;
  top: ${(props) => props.y}vh;
  width: 813px;
  height: 813px;
  border-radius: 100em;
  background: ${colors.yellow50};
  z-index: -10;
`;
