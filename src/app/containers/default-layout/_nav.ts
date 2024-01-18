import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    // iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: ''
    }
  },
  {
    name: 'Manage Department',
    url: '/department',
    // iconComponent: { name: 'cil-cursor' },
  },
  {
    name: ' Manage Designation',
    url: '/designation',
    // iconComponent: { name: 'cil-cursor' },
  },
  {
    name: 'Manage Employee',
    url: '/employee',
    // iconComponent: { name: 'cil-user' },
  },
  {
    name: 'Leave Management',
    url: '/leave',
    // iconComponent: { name: 'cil-cursor' },
  },
  {
    name: 'Attendance Management',
    url: '/attendance',
    // iconComponent: { name: 'cil-cursor' },
  },
  // {
  //   name: 'Pages',
  //   url: '/login',
  //   iconComponent: { name: 'cil-star' },
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500'
  //     }
  //   ]
  // },
];