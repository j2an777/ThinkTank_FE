import { AuthBackground, ShadowBox } from '@/components/shared';
import * as S from '@/components/shared/authBackground/styles.ts';
import OptionalForm from '@/components/signup/optionalForm';

const SignupOptionalPage = () => {
  return (
    <S.Container>
      <AuthBackground />
      <ShadowBox padding={50} height={830}>
        <OptionalForm />
      </ShadowBox>
    </S.Container>
  );
};

export default SignupOptionalPage;
