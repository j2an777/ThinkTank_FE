import { LanguageValues } from '@/consts/language';
import useSetFormData from '@/hooks/post/useSetFormData';
import Editor, { loader } from '@monaco-editor/react';

interface CodeEditorProps {
  language: LanguageValues;
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

const CodeEditor = ({ language }: CodeEditorProps) => {
  const { updatePostForm, postForm } = useSetFormData();
  return (
    <Editor
      height="400px"
      options={{
        readOnly: false,
        minimap: { enabled: false },
        scrollbar: { vertical: 'hidden' },
        fontSize: 12,
      }}
      defaultLanguage="java"
      language={language}
      defaultValue="// some comment"
      value={postForm.answer}
      onChange={(value) => updatePostForm({ answer: value })}
      theme="myTheme"
    />
  );
};

export default CodeEditor;
