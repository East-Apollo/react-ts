import React from 'react';
import { renderRoutes } from 'react-router-config';
import Home from '@/components/home';
import Header from '@/components/header';
import Content from '@/components/content';
import { absRoutes } from '@/utils/route';

export const routers = [
  {
    path: '/home',
    component: Home,
    routes: [
      {
        path: '/content',
        component: Content,
        exact: true,
      },
    ],
  },
  {
    path: '/header',
    component: Header,
    exact: true,
  },
];

export default (): JSX.Element => {
  return renderRoutes(absRoutes(routers));
};
