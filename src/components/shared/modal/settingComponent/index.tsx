import { animationMap } from '@/styles/framerMotion';
import * as S from './styles';
import Text from '../../Text';
import Icon from '../../icon';

interface SettingComponentProps {
  open : boolean;
  buttonLabel?: string;
  onButtonClick: () => void;
  flag?: boolean;
  close?: () => void;
}

const SettingComponent = ({
  open,
  close,
  onButtonClick,
  buttonLabel,
  flag
}: SettingComponentProps) => {
  return (
    <>
      <S.CancelBox>
        <Icon value='cancel' onClick={close} size={60}/>
      </S.CancelBox>
      <S.Container
        variants={animationMap.fadeInOut}
        initial="close"
        animate={ open ? 'open' : 'close '}
        exit="close">
          <S.ButtonBox onClick={close}>
            <Text typography="t2" color='black'>수정</Text>
          </S.ButtonBox>
          <S.Line />
          {flag && (
            <S.ButtonBox onClick={onButtonClick}>
              <Text typography="t2" color='red'>{buttonLabel}</Text>
            </S.ButtonBox>
          )}
      </S.Container>
    </>
  )
}

export default SettingComponent