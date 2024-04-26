import React, { useState, forwardRef } from 'react';
import * as S from './styles';

type InputBoxProps = {
  label: string;
  type?: string;
  error?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};

const InputBox = forwardRef<HTMLInputElement, InputBoxProps>(
  ({ label, type, error, onChange, onBlur, name }, ref) => {
    const [isFocus, setIsFocus] = useState(false);

    return (
      <div>
        <S.Label hasFocus={isFocus}>{label}</S.Label>
        <S.Input
          name={name}
          hasFocus={isFocus}
          onFocus={() => setIsFocus(true)}
          onBlur={(event) => {
            setIsFocus(false);
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
