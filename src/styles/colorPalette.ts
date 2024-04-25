import { css } from '@emotion/react';

export const colorPalette = css`
  :root {
    --kakao: “#FEE500”;
    --yellow: '#EEB930';
    --yellow50: ‘#FFF5DB’;
    --yellowHover: '#D9A92E';
    --yellowActive: '#D9A92E';
    --blue: '#B0D0D3';
    --blueHover: '#9EB9BB';
    --red: '#FF0000';
    --gray: “#AAAAAA”;
    --gray50: “#E7E7E7”;
    --gray100: “#CACACA”;
    --gray200: “#777777”;
    --gray300: “#444444”;
  }
`;

export const colors = {
  kakao: 'val(--kakao)',
  yellow: 'val(--yellow)',
  yellow50: 'val(--yellow50)',
  yellowHover: 'val(--yellowHover)',
  yellowActive: 'val(--yellowActive)',
  blue: 'val(--blue)',
  blueHover: 'val(--blueHover)',
  red: 'val(--red)',
  gray: 'val(--gray)',
  gray50: 'val(--gray50)',
  gray100: 'val(--gray100)',
  gray200: 'val(--gray200)',
  gray300: 'val(--gray300)',
};

export type Colors = keyof typeof colors;
