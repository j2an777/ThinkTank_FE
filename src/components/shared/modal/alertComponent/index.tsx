import { StyledButton, Text } from '../..';

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
        {hasCancelButton ? (
          <StyledButton size="small" onClick={close} width="150px" buttonType="second">
            취소
          </StyledButton>
        ) : null}
        <StyledButton size="small" onClick={onButtonClick} width="150px">
          {buttonLabel}
        </StyledButton>
      </S.ButtonBox>
    </S.Container>
  );
};

export default AlertComponent;
