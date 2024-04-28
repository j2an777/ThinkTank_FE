import * as S from './styles.ts';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SignUp } from '@/types/user.ts';
import { Icon, InputBox } from '../shared/index.ts';

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUp>({
    mode: 'onChange',
  });
  const onSubmit: SubmitHandler<SignUp> = (data) => console.log(data);

  return (
    <S.ShadowBox>
      <Icon value='logo' />
      <div style={{ width: '70%' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <S.Blank />
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
            })}
            label="닉네임"
            error={errors.nickname?.message}
          />
          <S.Blank />
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
                  /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&*_+=`|\(){}[\]:;"'<>,.?/-])$/,
                message: '비밀번호는 영문, 숫자 및 특수문자를 모두 포함해야 합니다.',
              },
            })}
            label="비밀번호"
            type="password"
            error={errors.password?.message}
          />
          <S.Blank />
          <InputBox
            {...register('checkPassword', {
              validate: (value) =>
                value === watch('password') || '비밀번호가 일치하지 않습니다.',
            })}
            label="비밀번호 확인"
            type="password"
            error={errors.checkPassword?.message}
          />
          <button style={{ cursor: 'pointer' }}>확인</button>
        </form>
      </div>
    </S.ShadowBox>
  );
}
