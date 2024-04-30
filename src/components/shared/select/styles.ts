import { colors } from '@/styles/colorPalette';
import { layoutMap } from '@/styles/layout';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  > ul {
    position: absolute;
    ${layoutMap.shadowBox}
    gap: 10px;
    top: 48px;
    height: 300px;
    overflow: scroll;
    overflow-x: hidden;
    z-index: var(--select-zindex);
    background-color: white;
  }
`;

export const Select = styled.select<{ type?: 'primary' | 'fill' }>`
  font-size: 24px;
  border: none;
  ${({ type }) =>
    type === 'fill'
      ? css`
          background-color: ${colors.gray50};
          border-radius: 12px;
          font-size: 16px;
          padding: 8px 18px;
        `
      : ''}
`;
