import { AuthBackground, ShadowBox } from '@/components/shared';
import * as S from '@/components/shared/authBackground/styles.ts';
import OptionalForm from '@/components/signup/optionalForm';
import { useLocation } from 'react-router-dom';

const SignupOptionalPage = () => {
  const location = useLocation();
  const { nickname } = location.state || { nickname: '' };

  return (
    <S.Container>
      <AuthBackground />
      <ShadowBox padding={50} height={850}>
        <OptionalForm nickname={nickname} />
      </ShadowBox>
    </S.Container>
  );
};

export default SignupOptionalPage;
