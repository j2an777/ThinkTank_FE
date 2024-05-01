import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';

interface IconContainerProps extends HTMLAttributes<HTMLDivElement> {
  rotate?: boolean;
  size?: number;
}

export const Container = styled.div<IconContainerProps>`
  width: ${({ size }) => size ? `${size}px` : 'fit-content'};
  height: ${({ size }) => size ? `${size}px` : 'fit-content'};
  transform: ${({ rotate }) => (rotate ? 'rotate(180deg)' : 'rotate(0deg)')};

  svg {
    width: 100%;
    height : 100%;
    object-fit: contain;
  }
`;
