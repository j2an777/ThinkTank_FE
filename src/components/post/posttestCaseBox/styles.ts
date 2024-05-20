import { layoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
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
  display: flex;
  min-height: 150px;
  max-height: 200px;
  overflow: scroll;
  overflow-x: hidden;
  gap: 10px;
`;
export const TestCaseTitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;
