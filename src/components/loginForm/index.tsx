import * as S from './styles';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Icon, InputBox, StyledButton } from '../shared/index';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from '@/assets/images/loginImage.jpg';
import { postLogin } from '@/apis/user';
import { Login } from '@/types/auth';
import { setAccess } from '@/hooks/auth/useLocalStorage';
import { AxiosError } from 'axios';

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
      setAccess(accessToken);
      navigate(-1);
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const status = error.response.status;
        if (status === 404) {
          setError('email', {
            type: 'manual',
            message: '요청하신 회원을 찾을 수 없습니다.',
          });
        } else if (status === 400) {
          setError('password', {
            type: 'manual',
            message: '입력하신 비밀번호가 정확하지 않습니다.',
          });
        }
      }
      throw error;
    }
  };

  // const kakaoLogin = async () => {
  //   window.open(import.meta.env.VITE_KAKAO_URL);
  //   try {
  //     const response = await getKakaoLogin();
  //     const accessToken = response.accessToken;
  //     setAccess(accessToken);
  //     console.log('로그인 성공:', response);
  //     navigate(-1);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
            })}
            label="이메일"
            error={errors.email?.message}
          />
          <S.Blank />
          <InputBox
            {...register('password', {
              required: '비밀번호를 입력해주세요.',
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
        {/* <S.Social>
          간편하게 로그인하세요!
          <S.KakaoButton onClick={kakaoLogin}>
            <Icon value="kakao" />
            <p>카카오 로그인</p>
          </S.KakaoButton>
        </S.Social> */}
      </S.RightBox>
    </S.Container>
  );
}
