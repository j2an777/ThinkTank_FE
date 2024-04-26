import { css } from '@emotion/react';

export const colorPalette = css`
  :root {
    --kakao: #fee500;
    --yellow: #eeb930;
    --yellow50: #fff5db;
    --yellowHover: #d9a92e;
    --yellowActive: #d9a92e;
    --blue: #b0d0d3;
    --blueHover: #9eb9bb;
    --red: #ff0000;
    --gray: #aaaaaa;
    --gray50: #e7e7e7;
    --gray100: #cacaca;
    --gray200: #777777;
    --gray300: #444444;
  }
`;

export const colors = {
  kakao: 'var(--kakao)',
  yellow: 'var(--yellow)',
  yellow50: 'var(--yellow50)',
  yellowHover: 'var(--yellowHover)',
  yellowActive: 'var(--yellowActive)',
  blue: 'var(--blue)',
  blueHover: 'var(--blueHover)',
  red: 'var(--red)',
  gray: 'var(--gray)',
  gray50: 'var(--gray50)',
  gray100: 'var(--gray100)',
  gray200: 'var(--gray200)',
  gray300: 'var(--gray300)',
};

export type Colors = keyof typeof colors;
