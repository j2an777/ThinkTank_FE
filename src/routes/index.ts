import { LoginPage, MainPage } from '../pages';
import ErrorPage from '../pages/error';
import SignupPage from '../pages/signup';

export const routers = [
  { 
    path: '/', 
    component: MainPage,
    isProtected : false,
  },
  {
    path: '/login',
    component: LoginPage,
    isProtected : false,
  },
  {
    path: '/signup',
    component: SignupPage,
    isProtected : false,
  },
  {
    path: '/pm/:postId',
    component: MainPage,
    isProtected : true,
  },
  {
    // 유저 페이지 (컴포넌트 바꿀 것)
    path: '/mp/:userId',
    component: MainPage,
    isProtected : true,
  },
  {
    // 나머지 경로에 대해서는 404페이지 전환
    path: "*",
    component : ErrorPage,
    isProtected : false,
  }
];
