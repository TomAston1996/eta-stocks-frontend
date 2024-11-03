import React from 'react';
import { RouteObject } from 'react-router-dom';

import { ExplorePage } from './features/explorePage/ExplorePage';
import PageFooter from './features/footer/components/PageFooter';
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
        <PageFooter />
      </>
    ),
  },
  {
    path: '/explore',
    element: (
      <>
        <NavBar />
        <ExplorePage />
        <PageFooter />
      </>
    ),
  },
];

export { routes };
