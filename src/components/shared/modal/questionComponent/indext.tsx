import { CodeBox } from '@/components/post';
import { Icon, Text } from '../..';
import { LanguageNames } from '@/consts/language';

import * as S from './styles';
import { animationMap } from '@/styles/framerMotion';

interface QuestionComponentProps {
  open: boolean;
  title: React.ReactNode;
  close?: () => void;
  code?: string;
  language?: LanguageNames;
}

const QuestionComponent = ({
  open,
  close,
  title,
  code,
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
        <Text bold="bold">{title}</Text>
        <Icon value="cancel" onClick={close} />
      </S.TitleBox>
      <CodeBox layout={false} readOnly code={code} language={language} />
    </S.Container>
  );
};

export default QuestionComponent;
