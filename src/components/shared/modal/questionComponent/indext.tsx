import { CodeBox } from '@/components/post';
import { Icon, Text } from '../..';
import { LanguageNames } from '@/consts/language';

import * as S from './styles';

interface QuestionComponentProps {
  title: React.ReactNode;
  close?: () => void;
  answer?: string;
  language?: LanguageNames;
}

const QuestionComponent = ({
  close,
  title,
  answer,
  language,
}: QuestionComponentProps) => {
  return (
    <S.Container>
      <S.TitleBox>
        <Text bold>{title}</Text>
        <Icon value="cancel" onClick={close} />
      </S.TitleBox>
      <CodeBox layout={false} readOnly answer={answer} language={language} />
    </S.Container>
  );
};

export default QuestionComponent;
