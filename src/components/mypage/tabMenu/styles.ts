//import { layoutMap } from '@/styles/layout';
import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
`;

export const TabMenu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid ${colors.gray};
`;

export const TabBox = styled.li<{ active: boolean }>`
  padding: 0 90px 20px;
  border-bottom: ${({ active }) => (active ? `5px solid ${colors.yellow}` : 'none')};
`;
