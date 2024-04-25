import { useForm, SubmitHandler } from 'react-hook-form';
import InputBox from '../../components/shared/inputBox/index.tsx';
import * as S from '../../components/shared/authBackground/styles.ts';
import { SignUp } from '../../types/user.ts';

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUp>({
    mode: 'all',
  });
  const onSubmit: SubmitHandler<SignUp> = (data) => console.log(data);

  return (
    <S.Container>
      <S.Circle x={-20} y={-25}></S.Circle>
      <S.Circle x={65} y={50}></S.Circle>
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
            />
            <InputBox label="아이디" />
            <InputBox label="비밀번호" />
            <InputBox label="비밀번호 확인" />
            <button>회원가입</button>
          </form>
        </div>
      </S.ShadowBox>
    </S.Container>
  );
};

export default SignupPage;
