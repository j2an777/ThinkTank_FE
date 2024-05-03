import { colors } from '@/styles/colorPalette';
import { layoutMap } from '@/styles/layout';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 800px;
  padding: 30px;
`;

export const IconCss = css`
  margin-bottom: 15px;
  margin-left: auto;
`;

export const testButton = css`
  font-size: 24px;
  font-weight: bold;

  background-color: ${colors.yellow};
  color: white;
  padding: 10px 50px;
  border-radius: 50px;
`;

export const ButtonBox = styled.div`
  display: flex;
  margin-top: 60px;
  justify-content: end;
  gap: 20px;
  > div:first-of-type {
    margin-right: auto;
  }
`;

export const questionCss = css`
  ${layoutMap.shadowBox}
  border-radius: 100%;
  padding: 10px;
  width: 48px;
  height: 48px;
`;
