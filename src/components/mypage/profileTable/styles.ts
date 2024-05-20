import { colors } from '@/styles/colorPalette';
import { layoutMap } from '@/styles/layout';
import { typographyMap } from '@/styles/typography';
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
  height: 700px;
  border-top: 1px solid ${colors.gray200};
`;

export const Thead = styled.div`
  ${layoutMap.flexCenter}
  flex: 1;
  min-width: 150px;
  background: ${colors.yellow};
  ${typographyMap.semibold}
  ${typographyMap.t4}
`;

export const Tbody = styled.div`
  display: table;
  flex: 4;
  ${typographyMap.t5}
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
  ${typographyMap.t5}
  outline: none;
`;

export const TextArea = styled.textarea`
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid ${colors.gray};
  ${typographyMap.t5}
  outline: none;
  width: 70%;
  height: 60%;
`;
