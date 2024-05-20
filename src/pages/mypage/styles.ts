import styled from '@emotion/styled';

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex: 1;
  min-width: 900px;
  @media (max-width: 900px) {
  }
  @media (max-width: 570px) {
    margin-top: 50px;
  }
`;

export const Box = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 380px;
  height: 100%;
  padding: 50px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;

  @media (max-width: 1300px) {
    display: none;
  }
`;
