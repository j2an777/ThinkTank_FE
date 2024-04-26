import { ShadowBox, Text } from '..';
import Dimmed from './Dimmed';
import * as S from './styles';

interface ModalProps {
  open?: boolean;
  title: React.ReactNode;
  description?: React.ReactNode;
  buttonLabel?: string;
  hasCancelButton?: boolean;
  onButtonClick: () => void;
  close?: () => void;
}

const Modal = ({
  title,
  onButtonClick,
  buttonLabel,
  description,
  hasCancelButton = false,
  open,
  close,
}: ModalProps) => {
  if (!open) return null;
  return (
    <Dimmed>
      <ShadowBox css={S.ContainerCss}>
        <Text typography="t1" bold>
          {title}
        </Text>
        {description ?? <Text>{description}</Text>}
        <S.ButtonBox>
          {hasCancelButton ? <button onClick={close}>취소</button> : null}
          <button onClick={onButtonClick}>{buttonLabel}</button>
        </S.ButtonBox>
      </ShadowBox>
    </Dimmed>
  );
};

export default Modal;
