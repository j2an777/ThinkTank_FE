import { colors } from '@/styles/colorPalette';
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
`;
