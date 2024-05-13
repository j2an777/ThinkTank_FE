import { layoutMap } from '@/styles/layout';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div<{ layout: boolean }>`
  ${({ layout = true }) =>
    layout
      ? css`
          ${layoutMap.shadowBox}
          padding: 30px;
        `
      : css`
          display: flex;
          flex-direction: column;
          border-radius: 15px;
          background: white;
        `}

  gap: 20px;
  flex: 1;
`;

export const LanguageBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 20px;
`;
