import { css } from '@emotion/react';

export const typographyMap = {
  t1: css`
    font-size: 28px;
  `,
  t2: css`
    font-size: 24px;
  `,
  t3: css`
    font-size: 20px;
  `,
  t4: css`
    font-size: 16px;
  `,

  semibold: css`
    font-weight: 500;
  `,
  bold: css`
    font-weight: 700;
  `,
};

export type Typograph = keyof typeof typographyMap;
