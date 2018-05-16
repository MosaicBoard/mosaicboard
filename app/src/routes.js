import Login from './components/Pages/Login';
import ResetPassword from './components/Pages/ResetPassword';
import SignUp from './components/Pages/SignUp';
import Dashboard from './components/Pages/Dashboard';

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
  },
  {
    path: '/signup',
    title: 'SignUp',
    breadcrumb: 'SignUp',
    breadcrumb_link: false,
    exact: true,
    component: SignUp
  },
  {
    path: '/dashboard',
    title: 'Dashboard',
    breadcrumb: 'Dashboard',
    breadcrumb_link: true,
    exact: true,
    component: Dashboard
  }
];
