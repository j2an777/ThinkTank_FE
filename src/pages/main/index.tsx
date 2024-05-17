import { Suspense, lazy } from 'react';
import MainExtra from '@/components/main/mainExtra/MainExtra';
import Nav from '@/components/nav/Nav';
import { MainContainer } from './styles';
import Loading from '@/components/loader';

const MainPage = () => {
  const Main = lazy(() => import('@/components/main/mainList/MainList'));
  return (
    <MainContainer>
      <Nav />
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
      <MainExtra />
    </MainContainer>
  );
};

export default MainPage;
