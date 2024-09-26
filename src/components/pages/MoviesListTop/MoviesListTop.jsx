import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTopFilmsQuery } from '../../../services/kinopoiskApi';
import { setPage } from '../../../redux/slices/currentQuerySlice';
import { TOP_LISTS } from '../../../constants';
import { Button, Stack, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import MoviesList from '../../ui/MoviesList';
import ErrorMessage from '../../ui/ErrorMessage';
import Loader from '../../ui/Loader/Loader';

import styles from './MoviesListTop.module.css';

const MoviesListTop = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { page } = useSelector(state => state.currentQuery)
  const movieType = TOP_LISTS.find(el => el.url === location.pathname)

  const { data, error, isLoading } = useGetTopFilmsQuery({
    type: movieType.value,
    page
  })

  React.useEffect(() => {
    dispatch(setPage(1))
  }, [location])

  if (error) return <ErrorMessage />

  if (isLoading) return <Loader />

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
        totalPages={data.totalPages} />
    </>
  );
};

export default MoviesListTop;