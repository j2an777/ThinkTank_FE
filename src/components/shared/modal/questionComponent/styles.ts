import { layoutMap } from '@/styles/layout';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  ${layoutMap.shadowBox}
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  gap: 20px;
`;

export const TitleBox = styled.div`
  ${layoutMap.flexCenter}
  flex-direction: row;
  justify-content: space-between;
`;
