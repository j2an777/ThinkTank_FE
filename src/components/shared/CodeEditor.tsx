import { LanguageValues } from '@/consts/language';
import useSetFormData from '@/hooks/post/useSetFormData';
import Editor from '@monaco-editor/react';

interface CodeEditorProps {
  language: LanguageValues;
}

const CodeEditor = ({ language }: CodeEditorProps) => {
  const { updatePostForm, postForm } = useSetFormData();
  return (
    <Editor
      height="400px"
      options={{ scrollbar: { vertical: 'hidden' }, fontSize: 12 }}
      language={language}
      defaultValue="// some comment"
      value={postForm.answer}
      onChange={(value) => updatePostForm({ answer: value })}
    />
  );
};

export default CodeEditor;
