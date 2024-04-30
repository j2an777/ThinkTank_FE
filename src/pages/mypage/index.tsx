import { UserInfo, TabMenu } from '@/components/mypage';
import { Container } from './styles';

const MyPage = () => {
  return (
    <Container>
      <UserInfo />
      <TabMenu />
    </Container>
  );
};

export default MyPage;
