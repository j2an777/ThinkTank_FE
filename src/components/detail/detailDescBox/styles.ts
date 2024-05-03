import styled from '@emotion/styled';
import { colors } from '../../../styles/colorPalette';
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

  > textarea {
    flex: 1;
    resize: none;
    border: none;
    outline: none;
  }
`;
