import React from 'react';

import { Pagination, Stack } from '@mui/material';

import MovieCard from '../MovieCard';

const MoviesList = ({ movies, totalPages, page, setPage }) => {

  return (
    <>
      <Stack direction="row" justifyContent="space-between" flexWrap="wrap">
        {movies && movies.map(movie => {
          return (
            <MovieCard
              key={movie.kinopoiskId}
              movie={movie} />
          )
        })}
      </Stack>
      <Pagination count={totalPages} />
    </>
  );
};

export default MoviesList;