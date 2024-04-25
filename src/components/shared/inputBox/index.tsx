import React, { useState } from 'react';
import * as S from './styles';

type InputBoxProps = {
  label: string;
  type: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputBox = ({ label }: InputBoxProps) => {
  const [hasFocus, setHasFocus] = useState(false);

  return (
    <div>
      <S.Label hasFocus={hasFocus}>{label}</S.Label>
      <S.Input
        hasFocus={hasFocus}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      />
    </div>
  );
};

export default InputBox;
