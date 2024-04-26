import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ContainerCss = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 48px 32px;
  background-color: white;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
