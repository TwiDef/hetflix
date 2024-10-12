import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useGetMovieDetailQuery,
  useGetSequelsAndPrequelsQuery,
  useGetStaffQuery
} from './../../../services/kinopoiskApi';

import { Grid, Button, Typography, ButtonGroup, Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import ReplyIcon from '@mui/icons-material/Reply';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';

import Loader from './../../ui/Loader/Loader';
import ErrorMessage from './../../ui/ErrorMessage/ErrorMessage';

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
    <>
      <Grid container spacing={2} mt={1}>
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

            <Grid className={styles.item} item xs={6}><Typography>Время</Typography></Grid>
            <Grid className={styles.item} item xs={6}>
              <Typography>{responseMovie.data.filmLength} (мин)</Typography>
            </Grid>

            <Grid className={styles.item} item xs={12}>
              <Typography>
                {responseMovie.data.description ? responseMovie.data.description : "Описание отсутствует"}
              </Typography>
            </Grid>

          </Grid>
        </Grid>

        {/* 3 */}
        <Grid container item xs={2} alignItems="center" mb="auto">
          <Typography variant="h6" sx={{ lineHeight: 1, fontWeight: 600, mb: 2 }}>В главных ролях</Typography>
          {(responseStaff.data.filter(el => {
            return el.professionKey === "ACTOR"
          })).slice(0, 10)
            .map((actor) => {
              return <Typography key={actor.staffId}>{actor.nameRu ? actor.nameRu : actor.nameEn}</Typography>
            })}
        </Grid>

      </Grid>

      <Grid container spacing={2} display="flex" alignItems="center" direction="column">
        <Grid item xs={12} >
          <ButtonGroup
            disableElevation
            variant="contained"
            sx={{
              mt: 2,
              ".MuiButtonGroup-grouped:not(:last-of-type)": {
                borderColor: "#fff"
              }
            }}>
            <Button
              href={responseMovie.data.webUrl}
              target="_black"
              sx={{ bgcolor: grey[800] }}
              endIcon={<LocalMoviesIcon />}>Кинопоиск</Button>
            <Button
              href={`https://www.imdb.com/title/${responseMovie.data.imdbId}/`}
              target="_black"
              sx={{ bgcolor: grey[800] }}
              endIcon={<LiveTvIcon />}>IMDB</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </>
  );
};

export default MovieDetail;