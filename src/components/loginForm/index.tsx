import * as S from './styles.ts';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Login } from '@/types/auth.ts';
import { Icon, InputBox, StyledButton } from '../shared/index.ts';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from '@/assets/images/loginImage.jpg';
import { AxiosError } from 'axios';
import { postLogin } from '@/apis/userapi.ts';

export default function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Login>({
    mode: 'onChange',
  });
  const onSubmit: SubmitHandler<Login> = async (data) => {
    try {
      const response = await postLogin(data);
      const accessToken = response.accessToken;
      localStorage.setItem('access', accessToken);
      localStorage.setItem('userId', data.email);
      console.log('로그인 성공:', response);
      navigate(-1);
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      console.error('로그인 에러:', error);
      if (axiosError.response) {
        const errorMessage = axiosError.response.data.message;
        if (errorMessage.includes('[❎ ERROR] 비밀번호가 일치하지 않습니다.')) {
          setError('password', {
            type: 'manual',
            message: '비밀번호가 일치하지 않습니다.',
          });
        } else if (axiosError.status === 404) {
          console.log(error);
        } else {
          setError('email', {
            type: 'manual',
            message: '이메일이 존재하지 않거나 잘못되었습니다.',
          });
        }
      }
    }
  };

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
          <StyledButton width="100%" typography="t3">
            로그인
          </StyledButton>
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