import { colors } from '@/styles/colorPalette';
import { layoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 43px;
`;

export const Table = styled.div`
  display: flex;
  height: 400px;
  border-top: 1px solid ${colors.gray200};
  border-bottom: 1px solid ${colors.gray200};
`;

export const Thead = styled.div`
  flex: 1;
  background: ${colors.yellow};
  text-align: center;
  font-size: 24px;
  font-weight: 500;
`;

export const Tbody = styled.div`
  flex: 4;
  font-size: 20px;
  font-weight: 400;
`;

export const Th = styled.div<{ height: number }>`
  ${layoutMap.flexCenter}
  height: ${({ height }) => height}px;
  border-bottom: 1px solid ${colors.gray200};
`;

export const Td = styled.div<{ height: number }>`
  display: flex;
  align-items: center;
  height: ${({ height }) => height}px;
  padding-left: 55px;
  border-bottom: 1px solid ${colors.gray200};
`;

export const Block = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled.button`
  width: fit-content;
  padding: 10px 30px;
  border-radius: 5px;
  border: 1px solid ${colors.gray};
`;

export const Input = styled.input`
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid ${colors.gray};
  font-size: 20px;
  outline: none;
`;
