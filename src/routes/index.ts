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
    element: MainPage,
    isProtected: false,
  },
  {
    path: '/login',
    element: LoginPage,
    isProtected: false,
  },
  {
    // 나머지 경로에 대해서는 404페이지 전환
    path: '*',
    element: ErrorPage,
    isProtected: false,
  },
  {
    path: '/signup/required',
    element: SignupRequiredPage,
    isProtected: false,
  },
  {
    path: '/signup/optional',
    element: SignupOptionalPage,
    isProtected: false,
  },
  {
    path: '/post',
    element: PostPage,
    isProtected: true,
  },
  {
    path: '/detail/:postId',
    element: DetailPage,
    isProtected: false,
  },
  {
    path: '/mypage',
    element: MyPage,
    isProtected: true,
  },
  {
    path: '/mypage/modify',
    element: Profile,
    isProtected: true,
  },
  {
    path: '/profile',
    element: MyPage,
    isProtected: true,
  },
];
