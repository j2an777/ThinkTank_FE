import { AuthBackground } from '@/components/shared/index.ts';
import * as S from '@/components/shared/authBackground/styles.ts';
import OptionalForm from '@/components/optionalForm';

const SignupOptionalPage = () => {
  return (
    <S.Container>
      <AuthBackground />
      <OptionalForm />
    </S.Container>
  );
};

export default SignupOptionalPage;
