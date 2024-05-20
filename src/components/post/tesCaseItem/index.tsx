import { Icon } from '@/components/shared';
import { TestCase } from '@/types';
import { ChangeEvent } from 'react';

import * as S from './styles';

interface TestCaseItemProps {
  testCase: TestCase;
  onChange: ({
    index,
    event,
  }: {
    index: number;
    event: ChangeEvent<HTMLTextAreaElement>;
  }) => void;
  index: number;
  onDelete: (index: number) => void;
}

const TestCaseItem = ({ testCase, onChange, index, onDelete }: TestCaseItemProps) => {
  return (
    <S.Container>
      <textarea
        name="example"
        value={testCase.example}
        onChange={(event) => onChange({ index, event })}
      />
      <textarea
        name="result"
        value={testCase.result}
        onChange={(event) => onChange({ index, event })}
      />
      <Icon value="cancel" size={14} onClick={() => onDelete(index)} color="white" />
    </S.Container>
  );
};

export default TestCaseItem;
