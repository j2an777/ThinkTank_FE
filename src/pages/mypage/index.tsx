import { UserInfo, TabMenu } from '@/components/mypage';
import { MainContainer } from '../main/styles';
import Nav from '@/components/nav/Nav';

import * as S from './styles';

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
