import * as S from './styles.ts';
import { InputBox, StyledButton, Icon } from '@/components/shared';
import { useState } from 'react';
import { useModalContext } from '@/contexts/ModalContext.tsx';
import { useNavigate } from 'react-router-dom';

const OptionalForm = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [text, setText] = useState('');
  const { open } = useModalContext();
  const navigate = useNavigate();

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length <= 150) {
      setText(event.target.value);
    }
  };

  return (
    <S.Container>
      <Icon value="logo" />
      <S.Form>
        <InputBox label="깃허브" type="text" placeholder="선택 입력 사항 입니다." />
        <S.Blank />
        <InputBox label="블로그" type="text" placeholder="선택 입력 사항 입니다." />
        <S.Blank />
        <S.Label isFocus={isFocus}>자기소개</S.Label>
        <S.TextArea
          isFocus={isFocus}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          placeholder="선택 입력 사항 입니다."
          value={text}
          onChange={handleTextChange}
        />
        <S.TextLimit>{`${text.length}/150 자`}</S.TextLimit>
      </S.Form>
      <StyledButton
        width="100%"
        onClick={() =>
          open({
            title: '회원가입이 완료되었습니다.',
            onButtonClick: () => {
              navigate('/login');
            },
            hasCancelButton: true,
            buttonLabel: '확인',
          })
        }
      >
        회원 가입
      </StyledButton>
    </S.Container>
  );
};

export default OptionalForm;
