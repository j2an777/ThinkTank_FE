import * as S from './styles.ts';
import { InputBox, StyledButton, Icon } from '@/components/shared';
import { useEffect, useState } from 'react';
import { useModalContext } from '@/contexts/ModalContext.tsx';
import { useNavigate } from 'react-router-dom';
import useForm from '@/hooks/useForm.ts';

const OptionalForm = () => {
  const navigate = useNavigate();
  const { open } = useModalContext();
  const [isFocus, setIsFocus] = useState(false);
  const [text, setText] = useState('');
  const { value: github, onChange: onChangeGithub } = useForm();
  const { value: blog, onChange: onChangeBlog } = useForm();

  const onChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length <= 100) {
      setText(event.target.value);
    }
  };

  useEffect(() => {
    open({
      title: '회원가입이 완료되었습니다.',
      description:
        '세부사항을 입력해주세요. 세부사항은 수정할 수 있습니다. 입력을 생략하시겠습니까?',
      onButtonClick: () => {
        navigate('/');
      },
      hasCancelButton: true,
      buttonLabel: '확인',
    });
  }, []);

  return (
    <S.Container>
      <Icon value="logo" />
      <S.Inputs>
        <InputBox
          label="깃허브"
          type="text"
          placeholder="선택 입력 사항 입니다."
          value={github}
          onChange={onChangeGithub}
        />
        <S.Blank />
        <InputBox
          label="블로그"
          type="text"
          placeholder="선택 입력 사항 입니다."
          value={blog}
          onChange={onChangeBlog}
        />
        <S.Blank />
        <S.Label isFocus={isFocus}>자기소개</S.Label>
        <S.TextArea
          isFocus={isFocus}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          placeholder="선택 입력 사항 입니다."
          value={text}
          onChange={onChangeText}
        />
        <S.TextLimit>{`${text.length}/150 자`}</S.TextLimit>
      </S.Inputs>
      <StyledButton width="100%" onClick={() => navigate('/')}>
        확인
      </StyledButton>
    </S.Container>
  );
};

export default OptionalForm;
