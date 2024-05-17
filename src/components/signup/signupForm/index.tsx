import * as S from './styles.ts';
import { useForm, SubmitHandler } from 'react-hook-form';
import { StyledButton, Icon, InputBox } from '@/components/shared';
import { useNavigate } from 'react-router-dom';
import { postLogin, postSignup } from '@/apis/user';
import { SignUp } from '@/types/auth.ts';
import { setAccess } from '@/hooks/auth/useLocalStorage.ts';
import { AxiosError } from 'axios';

const SignupForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<SignUp>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<SignUp> = async (data) => {
    try {
      // 선택사항 빈 값으로 보냄
      const fullData = { ...data, github: '', blog: '', introduce: '' };
      const signupResponse = await postSignup(fullData);

      if (signupResponse) {
        // 자동 로그인
        const loginResponse = await postLogin(data);
        const accessToken = loginResponse.accessToken;
        setAccess(accessToken);
        navigate('/signup/optional', {
          state: { nickname: data.nickname },
        });
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      if (axiosError.response) {
        const errorMessage = axiosError.response.data.message;
        if (errorMessage.includes('닉네임')) {
          setError('nickname', {
            type: 'manual',
            message: '이미 존재하는 닉네임입니다',
          });
        } else if (errorMessage.includes('이메일')) {
          setError('email', {
            type: 'manual',
            message: '이미 존재하는 이메일입니다.',
          });
        } else {
          setError('email', {
            type: 'manual',
            message: '[회원가입 오류] 다시 시도해주세요.',
          });
        }
      }
    }
  };

  return (
    <S.Container>
      <Icon value="logo" />
      <S.Block onSubmit={handleSubmit(onSubmit)}>
        <div>
          <InputBox
            {...register('email', {
              required: '필수 응답 항목입니다.',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                message: '이메일 형식이 아닙니다.',
              },
            })}
            label="이메일"
            error={errors.email?.message}
          />
        </div>
        <div>
          <InputBox
            {...register('nickname', {
              required: '필수 응답 항목입니다.',
              minLength: {
                value: 2,
                message: '닉네임은 최소 2자 이상이어야 합니다.',
              },
              maxLength: {
                value: 10,
                message: '닉네임은 최대 10자까지 허용됩니다.',
              },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: '닉네임은 영문자만 허용됩니다.',
              },
            })}
            label="닉네임"
            error={errors.nickname?.message}
          />
        </div>
        <div>
          <InputBox
            {...register('password', {
              required: '필수 응답 항목입니다.',
              minLength: {
                value: 6,
                message: '비밀번호는 최소 6자 이상이어야 합니다.',
              },
              maxLength: {
                value: 20,
                message: '비밀번호는 최대 20자까지 허용됩니다.',
              },
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&*_+=`|(){}[\]:;"'<>,.?/-]).{6,20}$/,
                message: '비밀번호는 영문, 숫자 및 특수문자를 모두 포함해야 합니다.',
              },
            })}
            label="비밀번호"
            type="password"
            error={errors.password?.message}
          />
        </div>
        <div>
          <InputBox
            {...register('checkPassword', {
              validate: (value) =>
                value === watch('password') || '비밀번호가 일치하지 않습니다.',
            })}
            label="비밀번호 확인"
            type="password"
            error={errors.checkPassword?.message}
          />
        </div>
        <StyledButton width={'100%'} style={{ marginTop: '80px' }}>
          회원가입
        </StyledButton>
      </S.Block>
    </S.Container>
  );
};

export default SignupForm;
