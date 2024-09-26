import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useGetFilmsQuery } from '../../../services/kinopoiskApi';
import { setPage } from '../../../redux/slices/currentQuerySlice';
import { Button, Stack, Typography } from '@mui/material';
import { MOVIE_LISTS } from './../../../constants';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import MoviesList from '../../ui/MoviesList';
import ErrorMessage from '../../ui/ErrorMessage';
import Loader from '../../ui/Loader/Loader';

import styles from './MoviesListMain.module.css';

const MoviesListMain = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { page, order, genreId } = useSelector(state => state.currentQuery)
  const movieType = MOVIE_LISTS.find(el => el.url === location.pathname)
  const currentGenreId = movieType.url === "/cartoons" ? 18 : genreId

  const { data, error, isLoading } = useGetFilmsQuery({
    genreId: currentGenreId,
    order,
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

export default MoviesListMain;