import { UserInfo, TabMenu } from '@/components/mypage';
import * as S from './styles';
import { MainContainer } from '../main/styles';
import Nav from '@/components/nav/Nav';

const MyPage = () => {
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
