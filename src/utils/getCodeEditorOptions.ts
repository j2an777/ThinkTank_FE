import * as monaco from 'monaco-editor';

const getCodeEditorOptions = ({ readOnly }: { readOnly: boolean }) => {
  const options: monaco.editor.IStandaloneEditorConstructionOptions = {
    readOnly,
    minimap: { enabled: false },
    scrollbar: { vertical: 'hidden' },
    fontSize: 12,
    domReadOnly: readOnly,
  };

  return options;
};

export default getCodeEditorOptions;
