import styled from '@emotion/styled';
import { colors } from '../../../styles/colorPalette';
import { css } from '@emotion/react';
import { layoutMap } from '@/styles/layout';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex: 1;
  border-bottom: 1px solid ${colors.gray50};
  gap: 30px;
`;

export const ContentBox = styled.div`
  ${layoutMap.shadowBox}
  flex: 1;
  gap: 20px;

  div:last-child {
    margin-top: auto;
    flex: 0.5;
  }
`;

export const formBaseCss = css`
  border: 2px solid white;
  padding: 10px;
  outline-color: ${colors.yellowActive};
  ::placeholder {
    color: ${colors.gray50};
  }
`;

export const Title = styled.input`
  ${formBaseCss}
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
`;
