import { colors } from '@/styles/colorPalette';
import { layoutMap } from '@/styles/layout';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Icon } from '..';

export const Container = styled.div`
  position: relative;
  padding-right: 30px;
  width: fit-content;
`;

export const SelectIcon = styled(Icon)`
  display: flex;
  position: absolute;
  right: 5%;
  top: 50%;
  ${({ $rotate }) =>
    $rotate
      ? css`
          transform: translateY(-50%) rotate(180deg);
        `
      : css`
          transform: translateY(-50%) rotate(0deg);
        `};
`;

export const SelectList = styled.ul`
  position: absolute;
  ${layoutMap.shadowBox}
  gap: 10px;
  top: 48px;
  min-height: fit-content;
  max-height: 300px;
  overflow: scroll;
  overflow-x: hidden;
  z-index: var(--select-zindex);
  background-color: white;

  > li {
    padding: 5px;
    border-radius: 10px;
    :hover {
      background-color: ${colors.gray50};
    }
  }
`;

export const Select = styled.select<{ type?: 'primary' | 'fill' }>`
  font-size: 24px;
  border: none;
  width: calc(100% + 30px);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
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
