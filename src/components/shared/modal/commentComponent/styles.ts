import { layoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${layoutMap.shadowBox}
  position: absolute;
  right: 0;
  width: 800px;
  height: 100%;
  padding: 32px;
  background-color: white;
  justify-content: space-between;
  border-radius: 0;
  gap: 30px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  > button {
    align-self: end;
  }
`;
