import { colors } from '@/styles/colorPalette';
import { layoutMap } from '@/styles/layout';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const TestCaseContainer = styled(motion.div)`
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

export const ContentBox = styled(motion.div)`
  ${layoutMap.shadowBox}
  display: flex;
  min-height: 150px;
  max-height: 200px;
  overflow: scroll;
  overflow-x: hidden;
  gap: 10px;
`;

export const TestBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  > textarea {
    resize: none;
    border: 1px solid ${colors.blue};
    border-radius: 8px;
    outline: none;
    padding: 10px;
  }

  textarea:first-of-type {
    flex: 2;
  }
  textarea:nth-of-type(2) {
    flex: 1;
  }
`;
