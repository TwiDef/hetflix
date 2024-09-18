import React from 'react';

import { Pagination, Stack } from '@mui/material';

import MovieCard from '../MovieCard';

const MoviesList = ({ movies, totalPages, page, setPage }) => {

  const handleChangePage = (event, value) => {
    setPage(value)
    window.scroll(0, 0)
  }

  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        /* justifyContent="space-between"  */
        gap={2}
        flexWrap="wrap">
        {movies && movies.map(movie => {
          return (
            <MovieCard
              key={movie.kinopoiskId}
              movie={movie} />
          )
        })}
      </Stack>

      <Stack sx={{ mt: 4 }} direction="row" justifyContent="center">
        <Pagination
          count={totalPages}
          shape="rounded"
          page={page}
          onChange={(event, value) => handleChangePage(event, value)} />
      </Stack>
    </>
  );
};

export default MoviesList;