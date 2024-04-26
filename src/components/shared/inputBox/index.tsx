import React, { useState, forwardRef } from 'react';
import * as S from './styles';

type InputBoxProps = {
  label: string;
  type?: string;
  error?: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};

const InputBox = forwardRef<HTMLInputElement, InputBoxProps>(
  ({ label, type, error, onChange, onBlur, name }, ref) => {
    const [hasFocus, setHasFocus] = useState(false);

    return (
      <div>
        <S.Label hasFocus={hasFocus}>{label}</S.Label>
        <S.Input
          name={name}
          hasFocus={hasFocus}
          onFocus={() => setHasFocus(true)}
          onBlur={(event) => {
            setHasFocus(false);
            if (onBlur) onBlur(event);
          }}
          onChange={onChange}
          type={type}
          ref={ref}
        />
        {error && <S.Error>{error}</S.Error>}
      </div>
    );
  },
);

export default InputBox;
