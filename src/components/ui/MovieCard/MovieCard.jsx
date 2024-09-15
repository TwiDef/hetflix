import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Typography, Rating, Tooltip } from '@mui/material';

import styles from './MovieCard.module.css';

const MovieCard = ({ movie }) => {

  return (
    <Stack sx={{ width: 200 }}>
      <Link to={`/movie/${movie.kinopoiskId}`} >
        <img className={styles.img} src={movie.posterUrlPreview} alt={movie.nameOriginal}></img>
      </Link>
      <Typography
        lineHeight={1}
        textAlign="center">{movie.nameRu ? movie.nameRu : movie.nameOriginal}</Typography>
      {movie.ratingKinopoisk ? (
        <Tooltip title={movie.ratingKinopoisk}>
          <Stack className={styles.rating} alignItems="center">
            <Rating
              name="read-only"
              value={movie.ratingKinopoisk / 2}
              precision={0.5}
              size="small"
              readOnly />
          </Stack>
        </Tooltip>
      ) :
        <Tooltip title="unknown reting">
          <Stack className={styles.rating} alignItems="center">
            <Rating
              name="disabled"
              value={movie.ratingKinopoisk / 2}
              size="small"
              readOnly />
          </Stack>
        </Tooltip>}
    </Stack>
  );
};

export default MovieCard;