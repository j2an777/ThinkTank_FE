import { Text } from '../..';

import * as S from './styles';

interface AlertComponentProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  buttonLabel?: string;
  hasCancelButton?: boolean;
  onButtonClick: () => void;
  close?: () => void;
}

const AlertComponent = ({
  title,
  onButtonClick,
  buttonLabel,
  description,
  hasCancelButton = false,
  close,
}: AlertComponentProps) => {
  return (
    <S.Container>
      <Text typography="t1" bold>
        {title}
      </Text>
      {description ?? <Text>{description}</Text>}
      <S.ButtonBox>
        {hasCancelButton ? <button onClick={close}>취소</button> : null}
        <button onClick={onButtonClick}>{buttonLabel}</button>
      </S.ButtonBox>
    </S.Container>
  );
};

export default AlertComponent;
