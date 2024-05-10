import { DEFALUTCODE } from '@/consts/defaultCode';
import { LanguageValues } from '@/consts/language';
import useSetFormData from '@/hooks/post/useSetFormData';
import getCodeEditorOptions from '@/utils/getCodeEditorOptions';
import Editor, { loader } from '@monaco-editor/react';

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
  const { updatePostForm, postForm } = useSetFormData();
  const options = getCodeEditorOptions({ readOnly });
  console.log(postForm);
  return (
    <Editor
      height="400px"
      options={options}
      defaultLanguage="java"
      language={language}
      defaultValue={DEFALUTCODE.java}
      value={answer ?? postForm.answer}
      onChange={(answer) => updatePostForm({ answer })}
      theme="myTheme"
    />
  );
};

export default CodeEditor;

/**
 * 호출 시에 readOnly 속성만 주시고
 */
