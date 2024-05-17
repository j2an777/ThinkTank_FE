import { colors } from '@/styles/colorPalette';
import { typographyMap } from '@/styles/typography';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
`;

export const TabMenu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid ${colors.gray};
  ${typographyMap.t2}
`;

export const TabBox = styled.li<{ active: boolean }>`
  padding: 0 80px 16px;
  border-bottom: ${({ active }) => (active ? `8px solid ${colors.yellow}` : 'none')};
  color: ${({ active }) => (active ? `${colors.yellowActive}` : 'black')};
  cursor: pointer;
`;
