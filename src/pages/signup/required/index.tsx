import { AuthBackground, ShadowBox } from '@/components/shared';
import * as S from '@/components/shared/authBackground/styles.ts';
import SignupForm from '@/components/signup/signupForm';

const SignupRequiredPage = () => {
  return (
    <S.Container>
      <AuthBackground />
      <ShadowBox padding={50} height={830}>
        <SignupForm />
      </ShadowBox>
    </S.Container>
  );
};

export default SignupRequiredPage;
