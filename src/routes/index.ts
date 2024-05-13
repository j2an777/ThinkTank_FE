import {
  LoginPage,
  MainPage,
  PostPage,
  SignupOptionalPage,
  SignupRequiredPage,
  MyPage,
  Profile,
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
    path: '/users/profile',
    component: MyPage,
    isProtected: true,
  },
  {
    path: '/users/profile/modify',
    component: Profile,
    isProtected: true,
  },
];
