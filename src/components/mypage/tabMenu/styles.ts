import { colors } from '@/styles/colorPalette';
import { typographyMap } from '@/styles/typography';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 570px) {
    width: 90vw;
  }
`;

export const TabMenu = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid ${colors.gray};

  ${typographyMap.t2}

  @media (max-width: 1300px) {
    ${typographyMap.t4}
  }

  @media (max-width: 1000px) {
    ${typographyMap.t4}
  }
`;

export const TabBox = styled.li<{ active: boolean }>`
  text-align: center;
  padding: 0 80px 16px;
  border-bottom: ${({ active }) => (active ? `8px solid ${colors.yellow}` : 'none')};
  color: ${({ active }) => (active ? `${colors.yellowActive}` : 'black')};
  cursor: pointer;
  white-space: nowrap;
`;
