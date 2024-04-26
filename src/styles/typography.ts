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
};

export type Typograph = keyof typeof typographyMap;
