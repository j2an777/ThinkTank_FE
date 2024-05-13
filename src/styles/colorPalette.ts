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
    --gray100: #aaaaaa;
    --gray200: #cacaca;
    --gray300: #777777;
    --gray400: #444444;
    --black: 000000;
    --white: #ffffff;
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
  gray400: 'var(--gray400)',
  black: 'var(--black)',
  white: 'var(--white)',
};

export type Colors = keyof typeof colors;
