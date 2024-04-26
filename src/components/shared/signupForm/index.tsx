import * as S from './styles.ts';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SignUp } from '../../../types/user.ts';
import { InputBox } from '../index.ts';

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
            {...register('username', {
              required: '필수 응답 항목입니다.',
              minLength: {
                value: 4,
                message: '아이디는 최소 4자 이상이어야 합니다.',
              },
              maxLength: {
                value: 20,
                message: '아이디는 최대 20자까지 허용됩니다.',
              },
              pattern: {
                value: /^[A-Za-z0-9]+$/,
                message: '아이디는 영문자와 숫자만 가능합니다.',
              },
            })}
            label="아이디"
            error={errors.username?.message}
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
                value: 30,
                message: '닉네임은 최대 30자까지 허용됩니다.',
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
                value: 8,
                message: '비밀번호는 최소 8자 이상이어야 합니다.',
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                message: '비밀번호는 대문자, 소문자, 숫자 및 특수문자를 포함해야 합니다.',
              },
            })}
            label="비밀번호"
            type="password"
            error={errors.password?.message}
          />
          <S.Blank />
          <InputBox
            {...register('passwordConfirm', {
              validate: (value) =>
                value === watch('password') || '비밀번호가 일치하지 않습니다.',
            })}
            label="비밀번호 확인"
            type="password"
            error={errors.passwordConfirm?.message}
          />
          <button style={{ cursor: 'pointer' }}>확인</button>
        </form>
      </div>
    </S.ShadowBox>
  );
}
