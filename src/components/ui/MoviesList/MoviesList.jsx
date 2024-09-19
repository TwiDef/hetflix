import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../../redux/slices/curentQuerySlice';
import { Pagination, Stack } from '@mui/material';

import MovieCard from '../MovieCard';

const MoviesList = ({ movies, totalPages }) => {

  const dispatch = useDispatch()
  const { page } = useSelector(state => state.currentQuery)

  const handleChangePage = (event, value) => {
    dispatch(setPage(value))
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