import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 570px) {
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }
`;

export const Block = styled.div`
  flex-grow: 1;
  padding: 20px 50px;

  position: relative;
  flex-direction: column;
  align-items: center;
  border-left: 1px solid ${colors.gray50};
  border-right: 1px solid ${colors.gray50};

  @media (max-width: 1300px) {
    border: none;
    width: 95vw;
    overflow-x: hidden;
  }
`;

export const Box = styled.div`
  position: sticky;
  min-width: 380px;
  height: 100%;

  @media (max-width: 1600px) {
    display: none;
  }
`;
