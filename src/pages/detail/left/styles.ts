import styled from '@emotion/styled';
import { colors } from '@/styles/colorPalette';
import { css } from '@emotion/react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 800px;
  position: relative;
  height: 100vh;
  border-right: 1px solid ${colors.gray50};
`;

export const fallbackContentCss = css`
  position: relative;
  flex: 1;
  gap: 20px;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex: 1;
  border-bottom: 1px solid ${colors.gray50};
  gap: 30px;
`;
