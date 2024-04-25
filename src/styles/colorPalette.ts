import { css } from '@emotion/react';

export const colorPalette = css`
  :root {
    --kakao: #FEE500;
    --yellow: #EEB930;
    --yellow50: #FFF5DB;
    --yellowHover: #D9A92E;
    --yellowActive: #D9A92E;
    --blue: #B0D0D3;
    --blueHover: #9EB9BB;
    --red: #FF0000;
    --gray: #AAAAAA;
    --gray50: #E7E7E7;
    --gray100: #CACACA;
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
