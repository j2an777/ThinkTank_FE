import styled from '@emotion/styled';

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex: 1;
  min-width: 900px;
`;

export const Box = styled.div`
  position: sticky;
  width: 380px;
  @media (max-width: 1200px) {
    width: 250px;
  }

  @media (max-width: 1000px) {
    width: 150px;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
