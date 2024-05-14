import { ActiveBox, Container } from './styles';
import Icon, { IconValues } from '../icon';
import React from 'react';

interface InfoStatusProps {
  value: IconValues;
  count: number;
  onClick?: (e: React.MouseEvent) => void;
}
const InfoStatus = React.memo(({ value, count, onClick }: InfoStatusProps) => {
  return (
    <Container>
      <ActiveBox value={value} onClick={onClick}>
        <Icon value={value} size={24} />
      </ActiveBox>
      <p>{count}</p>
    </Container>
  );
});

export default InfoStatus;
