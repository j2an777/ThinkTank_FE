import {
  LoginPage,
  MainPage,
  PostPage,
  SignupOptionalPage,
  SignupRequiredPage,
  MyPage,
  DetailPage,
} from '../pages';
import ErrorPage from '../pages/error';

export const routers = [
  {
    path: '/',
    component: MainPage,
    isProtected: false,
  },
  {
    path: '/login',
    component: LoginPage,
    isProtected: false,
  },
  {
    // 유저 페이지 (컴포넌트 바꿀 것)
    path: '/mp/:userId',
    component: MainPage,
    isProtected: true,
  },
  {
    // 나머지 경로에 대해서는 404페이지 전환
    path: '*',
    component: ErrorPage,
    isProtected: false,
  },
  {
    path: '/signup/required',
    component: SignupRequiredPage,
    isProtected: false,
  },
  {
    path: '/signup/optional',
    component: SignupOptionalPage,
    isProtected: false,
  },
  {
    path: '/post',
    component: PostPage,
    isProtected: true,
  },
  {
    path: '/detail/:postId',
    component: DetailPage,
    isProtected: false,
  },
  {
    path: '/mypage',
    component: MyPage,
    isProtected: true,
  },
];
