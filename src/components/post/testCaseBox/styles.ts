import { layoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const TestCaseContainer = styled.div`
  width: 800px;
  padding: 20px;
  bottom: 0;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ContentBox = styled.div`
  ${layoutMap.shadowBox}
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 30px 1fr;
  height: 150px;
`;

export const TestBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
