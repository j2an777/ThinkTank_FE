import { layoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${layoutMap.shadowBox}
  padding: 30px;
  gap: 20px;
  flex: 1;
`;

export const LanguageBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 20px;
`;
