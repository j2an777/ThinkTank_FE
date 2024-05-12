import { DEFALUTCODE } from '@/consts/defaultCode';
import { LanguageValues } from '@/consts/language';
import useSetFormData from '@/hooks/post/useSetFormData';
import getCode from '@/utils/getCode';
import getCodeEditorOptions from '@/utils/getCodeEditorOptions';
import Editor, { loader } from '@monaco-editor/react';
import { useMemo } from 'react';

interface CodeEditorProps {
  language: LanguageValues;
  readOnly?: boolean;
  answer?: string;
}

loader.config({
  paths: {
    vs: 'https://www.unpkg.com/monaco-editor/min/vs',
  },
});

loader.init().then((monaco) => {
  monaco.editor.defineTheme('myTheme', {
    base: 'vs',
    inherit: true,
    rules: [],
    colors: {
      focusBorder: '#ffffff',
    },
  });
});
// colors 관련 key 정보 https://github.com/microsoft/monaco-editor/issues/1631

const CodeEditor = ({ language, readOnly = false, answer }: CodeEditorProps) => {
  const { updatePostForm } = useSetFormData();
  const options = getCodeEditorOptions({ readOnly });
  const editorKey = useMemo(() => language, [language]);
  return (
    <Editor
      key={editorKey}
      height="400px"
      options={options}
      defaultLanguage={editorKey}
      language={language}
      defaultValue={DEFALUTCODE[language]}
      value={answer}
      onChange={(answer) =>
        updatePostForm({ answer: getCode({ answer: answer as string, language }) })
      }
      theme="myTheme"
    />
  );
};

export default CodeEditor;
