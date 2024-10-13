import React from 'react';
import { RouteObject } from 'react-router-dom';

import { HomePage } from './features/homePage/HomePage';
import { NavBar } from './features/navBar/components/NavBar';

//defines all the routes on the webpage. First element in array is default. <Home /> (you could tecnically write <Home></Home> but <Home /> is shorthand with no nest component.)
const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <>
        <NavBar />
        <HomePage />
      </>
    ),
  },
  {
    path: '/explore',
    element: (
      <>
        <NavBar />
        <HomePage />
      </>
    ),
  },
];

export { routes };
