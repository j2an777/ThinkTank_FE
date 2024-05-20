import Icon, { IconValues } from '../icon';
import { Text } from '..';
import { MouseEvent, useEffect, useState } from 'react';

import * as S from './styles';
import { Typograph } from '@/styles/typography';

interface InfoStatusProps {
  value: IconValues;
  count: number;
  $active?: boolean;
  size?: number;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

const InfoStatus = ({ count, size = 36, ...props }: InfoStatusProps) => {
  const [iconSize, setIconSize] = useState(size);
  const [typoSize, setTypoSize] = useState<Typograph>("t3");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setIconSize(24);
        setTypoSize("t5");
      } else {
        setIconSize(size);
        setTypoSize("t3");
      }
    };

    window.addEventListener('resize', handleResize);

    // 초기 크기 설정
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <S.Container>
      <Icon size={iconSize} {...props} />
      <Text typography={typoSize} color="gray300">
        {count}
      </Text>
    </S.Container>
  );
};

export default InfoStatus;
