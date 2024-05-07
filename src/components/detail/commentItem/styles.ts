import { layoutMap } from '@/styles/layout';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${layoutMap.shadowBox}
  flex-direction: row;
  gap: 30px;
`;

export const UserBox = styled.div`
  ${layoutMap.flexCenter}
  justify-content: space-around;
  align-items: start;
`;

export const contentCss = css`
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  word-break: break-all;
  width: 400px;
  flex: 1;
`;

export const threedotCss = css`
  ${layoutMap.shadowBox}
  margin-left: auto;
  border-radius: 100%;
  padding: 10px;
`;
