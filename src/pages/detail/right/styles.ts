import { Icon } from '@/components/shared';
import { layoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 800px;
  padding: 30px;
`;

export const CancelIcon = styled(Icon)`
  margin-bottom: 15px;
  margin-left: auto;
`;

export const QuestionIcon = styled(Icon)`
  ${layoutMap.borderCircleIcon}
`;

export const ButtonBox = styled.div`
  display: flex;
  margin-top: 60px;
  align-items: center;
  flex-direction: row;
  justify-content: end;
  gap: 20px;
  > div:first-of-type {
    margin-right: auto;
  }
`;
