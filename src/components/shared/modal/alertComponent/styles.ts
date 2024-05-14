import { layoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${layoutMap.shadowBox}
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 32px 32px 48px;
  background-color: white;
  align-items: center;
  gap: 20px;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;
