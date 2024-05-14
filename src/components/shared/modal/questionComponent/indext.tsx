import { CodeBox } from '@/components/post';
import { Icon, Text } from '../..';
import { LanguageNames } from '@/consts/language';

import * as S from './styles';
import { animationMap } from '@/styles/framerMotion';

interface QuestionComponentProps {
  open: boolean;
  title: React.ReactNode;
  close?: () => void;
  answer?: string;
  language?: LanguageNames;
}

const QuestionComponent = ({
  open,
  close,
  title,
  answer,
  language,
}: QuestionComponentProps) => {
  return (
    <S.Container
      initial="close"
      animate={open ? 'open' : 'close'}
      variants={animationMap.fadeInOut}
      exit="close"
    >
      <S.TitleBox>
        <Text bold>{title}</Text>
        <Icon value="cancel" onClick={close} />
      </S.TitleBox>
      <CodeBox layout={false} readOnly answer={answer} language={language} />
    </S.Container>
  );
};

export default QuestionComponent;
