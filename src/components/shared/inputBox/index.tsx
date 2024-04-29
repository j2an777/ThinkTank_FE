import React, { useState, forwardRef } from 'react';
import * as S from './styles';

type InputBoxProps = {
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};

const InputBox = forwardRef<HTMLInputElement, InputBoxProps>(
  ({ label, name, placeholder, type, error, onChange, onBlur }, ref) => {
    const [isFocus, setIsFocus] = useState(false);

    return (
      <div>
        <S.Label isFocus={isFocus}>{label}</S.Label>
        <S.Input
          name={name}
          type={type}
          placeholder={placeholder}
          isFocus={isFocus}
          onFocus={() => setIsFocus(true)}
          onBlur={(event) => {
            setIsFocus(false);
            if (onBlur) onBlur(event);
          }}
          onChange={onChange}
          ref={ref}
        />
        {error && <S.Error>{error}</S.Error>}
      </div>
    );
  },
);

export default InputBox;
