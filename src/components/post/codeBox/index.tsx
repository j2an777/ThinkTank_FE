import { CodeEditor, Select, Text } from '@/components/shared';
import { LANGUAGE } from '@/consts/language';

import * as S from './styles';
import useSetFormData from '@/hooks/post/useSetFormData';

const CodeBox = () => {
  const { postForm, updatePostForm } = useSetFormData();
  const handleChangeSelect = (value: string) => {
    updatePostForm({ language: value });
  };
  return (
    <S.Container>
      <S.LanguageBox>
        <Text typography="t4">언어</Text>
        <Select optionData={LANGUAGE} type="fill" onChnage={handleChangeSelect} />
      </S.LanguageBox>
      <CodeEditor language={postForm.language} />
    </S.Container>
  );
};

export default CodeBox;
