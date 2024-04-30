import * as S from './styles.ts';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Login } from '@/types/auth.ts';
import { Icon, InputBox, StyledButton } from '../shared/index.ts';
import { Link } from 'react-router-dom';
import loginImage from '@/assets/images/loginImage.jpg';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    mode: 'onChange',
  });
  const onSubmit: SubmitHandler<Login> = (data) => console.log(data);

  return (
    <S.Container>
      <S.LeftBox>
        <S.Image src={loginImage} alt="Login Page" />
      </S.LeftBox>
      <S.RightBox>
        <Icon value="logo" />
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <InputBox
            {...register('email', {
              required: '아이디를 입력해주세요.',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                message: '올바른 아이디가 아닙니다.',
              },
            })}
            label="이메일"
            error={errors.email?.message}
          />
          <S.Blank />
          <InputBox
            {...register('password', {
              required: '비밀번호를 입력해주세요.',
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&*_+=`|(){}[\]:;"'<>,.?/-]).{6,20}$/,
                message: '6~20자의 영문, 숫자, 특수문자를 모두 포함해주세요.',
              },
            })}
            label="비밀번호"
            type="password"
            error={errors.password?.message}
          />
          <S.Signup>
            계정이 없으세요?
            <p>
              <Link to="/signup/required">회원가입</Link>
            </p>
          </S.Signup>
          <StyledButton width="100%">로그인</StyledButton>
        </S.Form>
        <S.Social>
          간편하게 로그인하세요!
          <S.KakaoButton>
            <Icon value="kakao" />
            <p>카카오 로그인</p>
          </S.KakaoButton>
          <S.GoogleButton>
            <Icon value="google" />
            <p>Google 로그인</p>
          </S.GoogleButton>
        </S.Social>
      </S.RightBox>
    </S.Container>
  );
}
