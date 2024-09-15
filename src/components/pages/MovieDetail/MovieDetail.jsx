import React from 'react';
import { useLocation } from 'react-router-dom';
import { useGetMovieDetailQuery } from './../../../services/kinopoiskApi';

const MovieDetail = () => {

  const getNumFromStr = (string) => {
    return (string).replace(/[^0-9]/g, '')
  }
  const location = useLocation()

  const { data, error, isLoading } = useGetMovieDetailQuery({
    id: getNumFromStr(location.pathname)
  })

  return (
    <div>
      <img width={300} src={data ? data.posterUrlPreview : ""}></img>
    </div>
  );
};

export default MovieDetail;