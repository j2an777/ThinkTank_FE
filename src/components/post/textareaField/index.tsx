import { ChangeEvent, MouseEvent, useRef, useState } from 'react';
import * as S from './styles';

interface TextareaFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextareaField = ({ label, name, value, onChange }: TextareaFieldProps) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [hasFocus, setHasFocus] = useState<boolean>(false);
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (textareaRef.current) {
      textareaRef.current.focus();
      setHasFocus(true);
    }
  };
  return (
    <S.Container
      onClick={handleMouseDown}
      onBlur={() => setHasFocus(false)}
      hasFocus={hasFocus}
    >
      <label>{label}</label>
      <textarea name={name} value={value} onChange={onChange} id="" ref={textareaRef} />
    </S.Container>
  );
};

export default TextareaField;
