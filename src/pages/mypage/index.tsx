import { UserInfo, TabMenu } from '@/components/mypage';
import * as S from './styles';
import { MainContainer } from '../main/styles';
import Nav from '@/components/nav/Nav';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('access')) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <MainContainer>
      <Nav />
      <S.Block>
        <UserInfo />
        <TabMenu />
      </S.Block>
      <S.Box />
    </MainContainer>
  );
};

export default MyPage;
