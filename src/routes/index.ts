import { LoginPage, MainPage, SignupRequiredPage, SignupOptionalPage } from '../pages';

export const routers = [
  { path: 'login', component: LoginPage },
  { path: 'signup/required', component: SignupRequiredPage },
  { path: 'signup/optional', component: SignupOptionalPage },
  { path: '/', component: MainPage },
];
