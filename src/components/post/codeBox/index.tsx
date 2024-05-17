import { CodeEditor, Select, Text } from '@/components/shared';
import { LANGUAGE, LanguageNames, LanguageValues } from '@/consts/language';
import useSetFormData from '@/hooks/post/useSetFormData';

import * as S from './styles';

interface CodeBoxProps {
  layout?: boolean;
  readOnly?: boolean;
  code?: string;
  language?: LanguageNames;
}

const CodeBox = ({ layout = true, readOnly = false, code, language }: CodeBoxProps) => {
  const { postForm, updatePostForm } = useSetFormData();
  const handleChangeSelect = (value: LanguageValues) => {
    updatePostForm({ language: value });
  };
  return (
    <S.Container layout={layout}>
      <S.LanguageBox>
        <Text typography="t4">언어</Text>
        {language ? (
          <>{language}</>
        ) : (
          <Select
            optionData={LANGUAGE}
            defaultValue
            type="fill"
            onChange={handleChangeSelect}
          />
        )}
      </S.LanguageBox>
      <CodeEditor language={postForm.language} readOnly={readOnly} code={code} />
    </S.Container>
  );
};

export default CodeBox;
