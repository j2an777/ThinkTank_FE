import { animationMap } from '@/styles/framerMotion';
import { motion } from 'framer-motion';

import * as S from './styles';

const CircleLoader = () => {
  return (
    <motion.span
      css={S.circleStyle}
      animate={{ rotate: 360 }}
      transition={animationMap.spinTransition}
    />
  );
};

export default CircleLoader;
