import { css } from '@emotion/react';

export const layoutMap = {
  shadowBox: css`
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    padding: 30px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  `,

  flexCenter: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  scrollbarsNone: css`
    overflow: scroll;
    /* 웹킷 브라우저용 */
    ::-webkit-scrollbar {
      display: none;
    }
    /* 파이어폭스용 */
    scrollbar-width: none;
  `,
  borderCircleIcon: css`
    display: flex;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 100%;
    padding: 5px;
  `,
};
