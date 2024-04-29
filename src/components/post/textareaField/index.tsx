import { MouseEvent, useRef, useState } from 'react';
import * as S from './styles';

interface TextareaFieldProps {
  label: string;
}

const TextareaField = ({ label }: TextareaFieldProps) => {
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
      onMouseDown={handleMouseDown}
      onBlur={() => setHasFocus(false)}
      hasFocus={hasFocus}
    >
      <label>{label}</label>
      <textarea name="" id="" ref={textareaRef} />
    </S.Container>
  );
};

export default TextareaField;
