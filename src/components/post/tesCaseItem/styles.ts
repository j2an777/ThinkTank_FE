import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;

  > textarea {
    resize: none;
    border: 1px solid ${colors.blue};
    border-radius: 8px;
    outline-color: ${colors.yellowActive};
    flex: 1;
  }

  &:hover > div:last-child {
    opacity: 1;
    visibility: visible;
  }

  div:last-child {
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 0.3s ease,
      visibility 0.3s ease;
    background-color: ${colors.red};
    border-radius: 100%;
  }
`;
