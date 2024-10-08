import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useGetMovieDetailQuery,
  useGetSequelsAndPrequelsQuery,
  useGetStaffQuery
} from './../../../services/kinopoiskApi';
import ReplyIcon from '@mui/icons-material/Reply';

import Loader from './../../ui/Loader/Loader';
import ErrorMessage from './../../ui/ErrorMessage/ErrorMessage';
import { Grid, Button, Typography } from '@mui/material';

import styles from './MovieDetail.module.css'

const MovieDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const responseMovie = useGetMovieDetailQuery(id)
  const responseStaff = useGetStaffQuery(id)
  const responseSequelsAndPrequels = useGetSequelsAndPrequelsQuery(id)

  if (responseMovie.isLoading ||
    responseStaff.isLoading ||
    responseSequelsAndPrequels && responseSequelsAndPrequels.isLoading) {
    return <Loader />
  }

  if (responseMovie.isError ||
    responseStaff.isError ||
    !responseSequelsAndPrequels && responseSequelsAndPrequels.isError) {
    return <ErrorMessage />
  }

  return (
    <Grid container spacing={2} mt={1} >
      {/* 1 */}
      <Grid item xs={4}>
        <img src={responseMovie.data.posterUrl} alt={responseMovie.data.nameOriginal} width="100%" />
      </Grid>

      {/* 2 */}
      <Grid container item xs={6} alignItems="center" mb="auto">
        <Grid item xs={2}>
          <Button className={styles.buttonBack} size="large" onClick={() => navigate(-1)}>
            <ReplyIcon sx={{ color: "white" }} />
          </Button>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6" sx={{ lineHeight: 1.2, fontWeight: 600 }}>
            {responseMovie.data.nameRu ? responseMovie.data.nameRu : responseMovie.data.nameOriginal}
          </Typography>
        </Grid>

        <Grid container item xs={12}>
          <Grid className={styles.item} item xs={6}><Typography>Год</Typography></Grid>
          <Grid className={styles.item} item xs={6}><Typography>{responseMovie.data.year}</Typography></Grid>

          <Grid className={styles.item} item xs={6}><Typography>Страна</Typography></Grid>
          <Grid className={styles.item} item xs={6}>{(responseMovie.data.countries).map(({ country }) => {
            return <Typography key={country}>{country}</Typography>
          })}
          </Grid>

          <Grid className={styles.item} item xs={6}><Typography>Жанры</Typography></Grid>
          <Grid className={styles.item} item xs={6}>{(responseMovie.data.genres).map(({ genre }) => {
            return <Typography key={genre}>{genre}</Typography>
          })}
          </Grid>

          <Grid className={styles.item} item xs={6}><Typography>Режиссеры</Typography></Grid>
          <Grid className={styles.item} item xs={6}>{(responseStaff.data.filter(el => {
            return el.professionKey === "DIRECTOR"
          })).map((el) => {
            return <Typography key={el.staffId}>{el.nameRu ? el.nameRu : el.nameEn}</Typography>
          })}
          </Grid>

        </Grid>
      </Grid>

      {/* 3 */}
      <Grid item xs={2}>
        Actors
      </Grid>

    </Grid>
  );
};

export default MovieDetail;