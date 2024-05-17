import Icon, { IconValues } from '../icon';
import { Text } from '..';
import { MouseEvent } from 'react';

import * as S from './styles';

interface InfoStatusProps {
  value: IconValues;
  count: number;
  $active?: boolean;
  size?: number;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

const InfoStatus = ({ count, size = 36, ...props }: InfoStatusProps) => {
  return (
    <S.Container>
      <Icon size={size} {...props} />
      <Text typography="t3" color="gray300">
        {count}
      </Text>
    </S.Container>
  );
};

export default InfoStatus;
