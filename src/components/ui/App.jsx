import React from 'react';

import { TOP_LISTS, MOVIE_LISTS } from '../../constants';

import Layout from './Layout';
import Movies from './../pages/Movies';
import MovieDetail from './../pages/MovieDetail';
import ActorDetail from './../pages/ActorDetail';
import MoviesListTop from './../pages/MoviesListTop';
import MoviesListMain from './../pages/MoviesListMain';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Movies />
        },
        ...TOP_LISTS.map((el) => ({
          path: el.url,
          element: <MoviesListTop />
        })),
        ...MOVIE_LISTS.map((el) => ({
          path: el.url,
          element: <MoviesListMain />
        })),
        {
          path: '/movie/:id',
          element: <MovieDetail />
        },
        {
          path: '/actor/:id',
          element: <ActorDetail />
        }
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;
