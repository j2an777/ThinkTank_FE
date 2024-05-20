import { UserInfo, TabMenu } from '@/components/mypage';
import Nav from '@/components/nav/Nav';

import * as S from './styles';

const MyPage = () => {
  return (
    <S.Container>
      <Nav />
      <S.Block>
        <UserInfo />
        <TabMenu />
      </S.Block>
      <S.Box />
    </S.Container>
  );
};

export default MyPage;
