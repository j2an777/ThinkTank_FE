import { Icon } from '@/components/shared';
import { layoutMap } from '@/styles/layout';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled.div`
  ${layoutMap.shadowBox}
  flex-direction: row;
  gap: 30px;
  align-items: center;
  position: relative;
`;

export const UserBox = styled.div`
  ${layoutMap.flexCenter}
  justify-content: space-around;
  align-items: start;
`;

export const contentCss = css`
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  word-break: break-all;
  width: 400px;
  flex: 1;
`;

export const ThreedotIcon = styled(Icon)`
  ${layoutMap.shadowBox}
  margin-left: auto;
  border-radius: 100%;
  padding: 5px;
`;

export const Test = styled(motion.div)`
  ${layoutMap.shadowBox}
  transform: translateX(-100%);
  position: absolute;
  right: 0;
  padding: 20px;
`;
