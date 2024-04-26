import { AuthBackground } from '@/components/shared/index.ts';
import * as S from '@/components/shared/authBackground/styles.ts';
import SignupForm from '@/components/signupForm';

const SignupRequiredPage = () => {
  return (
    <S.Container>
      <AuthBackground />
      <SignupForm />
    </S.Container>
  );
};

export default SignupRequiredPage;
