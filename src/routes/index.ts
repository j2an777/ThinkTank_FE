import {
  LoginPage,
  MainPage,
  PostPage,
  SignupRequiredPage,
  SignupOptionalPage,
  MyPage,
} from '../pages';

export const routers = [
  { path: '/', component: MainPage },
  { path: '/login', component: LoginPage },
  { path: '/signup/required', component: SignupRequiredPage },
  { path: '/signup/optional', component: SignupOptionalPage },
  { path: '/post', component: PostPage },
  { path: '/mypage', component: MyPage },
];
