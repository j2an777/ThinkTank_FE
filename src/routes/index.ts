import { LoginPage, MainPage, PostPage } from '../pages';

export const routers = [
  { path: '/login', component: LoginPage },
  { path: '/', component: MainPage },
  { path: '/post', component: PostPage },
];
