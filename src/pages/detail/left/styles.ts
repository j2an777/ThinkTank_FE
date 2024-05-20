import styled from '@emotion/styled';
import { colors } from '@/styles/colorPalette';
import { css } from '@emotion/react';
import { layoutMap } from '@/styles/layout';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${colors.gray50};
  min-width: 600px;
  width: 800px;
  height: 100vh;
`;

export const fallbackContentCss = css`
  position: relative;
  flex: 1;
  gap: 20px;
`;

export const ContentBox = styled.div`
  ${layoutMap.shadowBox}
  flex: 1;
  padding: 20px;
  gap: 30px;
`;
