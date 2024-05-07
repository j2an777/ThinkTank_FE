import LoginForm from '@/components/loginForm';
import { AuthBackground, ShadowBox } from '@/components/shared';
import * as S from '@/components/shared/authBackground/styles.ts';

const LoginPage = () => {
  return (
    <S.Container>
      <AuthBackground />
      <ShadowBox padding={50} height={850}>
        <LoginForm />
      </ShadowBox>
    </S.Container>
  );
};

export default LoginPage;
