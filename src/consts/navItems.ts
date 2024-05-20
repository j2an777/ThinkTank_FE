import { IconValues } from '../components/shared/icon';

interface NavItemsProps {
  icon: IconValues;
  label: string;
  path: string;
}

export const navItems: NavItemsProps[] = [
  {
    icon: 'home',
    label: 'Home',
    path: '/',
  },
  {
    icon: 'search',
    label: 'Search',
    path: '/',
  },
  {
    icon: 'file',
    label: 'Problem',
    path: '/post',
  },
  {
    icon: 'profile',
    label: 'Profile',
    path: '/mypage',

  },
  {
    icon: 'threedot',
    label: 'Setting',
    path: '/',
  },
];
