import React from 'react';
import { useGetTopFilmsQuery } from '../../../services/kinopoiskApi';

const MoviesListTop = () => {
  const { data, error, isLoading } = useGetTopFilmsQuery({ type: 'TOP_POPULAR_ALL', page: 2 })

  console.log(data, error, isLoading);

  return (
    <div>
      MoviesListTop
    </div>
  );
};

export default MoviesListTop;