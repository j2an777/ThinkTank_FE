import { css } from '@emotion/react';

export const layoutMap = {
  shadowBox: css`
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    background: white;
  `,

  flexCenter: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  styledButton: css`
    padding: 15px;
    border-radius: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
  `,
};
