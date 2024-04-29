import { CodeEditor, Select, Text } from '@/components/shared';
import { LANGUAGE } from '@/consts/language';

import * as S from './styles';

const CodeBox = () => {
  return (
    <S.Container>
      <S.LanguageBox>
        <Text typography="t4">언어</Text>
        <Select optionData={LANGUAGE} type="fill" />
      </S.LanguageBox>
      <CodeEditor />
    </S.Container>
  );
};

export default CodeBox;
