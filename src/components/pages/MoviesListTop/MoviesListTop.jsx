import React from 'react';
import { useLocation } from 'react-router-dom';
import { useGetTopFilmsQuery } from '../../../services/kinopoiskApi';
import { TOP_LISTS } from '../../../constants';

import { Button, Stack, Typography } from '@mui/material';

import MoviesList from '../../ui/MoviesList';

const MoviesListTop = () => {
  const location = useLocation()
  const [page, setPage] = React.useState(1)
  const movieType = TOP_LISTS.find(el => el.url === location.pathname)

  const { data, error, isLoading } = useGetTopFilmsQuery({
    type: movieType.value,
    page
  })

  if (error) return <p>ERROR</p>

  if (isLoading) return <p>LOADING</p>

  console.log(data)

  return (
    <div>
      <Stack flexDirection={"row"}>
        <Button>Back</Button>
        <Typography>{movieType.title}</Typography>
      </Stack>
      <MoviesList
        movies={data.items}
        totalPages={data.totalPages}
        page={page}
        setPage={setPage} />
    </div>
  );
};

export default MoviesListTop;