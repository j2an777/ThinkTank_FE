import { LoginPage, MainPage, SignupPage } from '../pages';

export const routers = [
  { path: 'login', component: LoginPage },
  { path: 'signup', component: SignupPage },
  { path: '/', component: MainPage },
];
