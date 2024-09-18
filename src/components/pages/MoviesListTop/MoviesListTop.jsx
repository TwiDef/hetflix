import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetTopFilmsQuery } from '../../../services/kinopoiskApi';
import { TOP_LISTS } from '../../../constants';
import { Button, Stack, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import MoviesList from '../../ui/MoviesList';

import styles from './MoviesListTop.module.css';

const MoviesListTop = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [page, setPage] = React.useState(1)
  const movieType = TOP_LISTS.find(el => el.url === location.pathname)

  const { data, error, isLoading } = useGetTopFilmsQuery({
    type: movieType.value,
    page
  })

  React.useEffect(() => {
    setPage(1)
  }, [location])

  if (error) return <p>ERROR</p>

  if (isLoading) return <p>LOADING</p>

  return (
    <>
      <Stack flexDirection={"row"} sx={{ mt: 2, mb: 2 }}>
        <Button
          sx={{ mr: 2 }}
          className={styles.buttonBack}
          onClick={() => navigate(-1)}
          startIcon={<ArrowBackIcon sx={{ color: "white" }} />} />
        <Typography sx={{ color: "white" }} variant='h4'>{movieType.title}</Typography>
      </Stack>

      <MoviesList
        movies={data.items}
        totalPages={data.totalPages}
        page={page}
        setPage={setPage} />
    </>
  );
};

export default MoviesListTop;