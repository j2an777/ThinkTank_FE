import { layoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;
  padding: 10px;
  ${layoutMap.scrollbarsNone}
`;
