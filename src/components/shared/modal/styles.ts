import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const AlertContainerCss = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 48px 32px;
  background-color: white;
`;

export const CommentContainerCss = css`
  position: absolute;
  right: 0;
  width: 800px;
  height: 100%;
  padding: 32px;
  background-color: white;
  justify-content: space-between;
  border-radius: 0;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
