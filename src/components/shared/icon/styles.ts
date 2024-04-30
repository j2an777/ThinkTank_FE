import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';

interface IconContainerProps extends HTMLAttributes<HTMLDivElement> {
  rotate?: boolean;
}

export const Container = styled.div<IconContainerProps>`
  width: fit-content;
  transform: ${({ rotate }) => (rotate ? 'rotate(180deg)' : 'rotate(0deg)')};
`;
