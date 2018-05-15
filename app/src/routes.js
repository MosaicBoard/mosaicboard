import Login from './components/Pages/Login';
import ResetPassword from './components/Pages/ResetPassword';

export const routes = [
  {
    path: '/',
    title: 'Login',
    breadcrumb: 'Login',
    breadcrumb_link: false,
    exact: true,
    component: Login
  },
  {
    path: '/reset_password',
    title: 'ResetPassword',
    breadcrumb: 'ResetPassword',
    breadcrumb_link: false,
    exact: true,
    component: ResetPassword
  }
];
