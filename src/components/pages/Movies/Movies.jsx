import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import useMoviesQuery from '../../../hooks/useMoviesQuery';
import BearCarousel, { BearSlideImage } from 'bear-react-carousel';
import { Stack, Link } from '@mui/material';

import MoviesSkeleton from './MoviesSkeleton';
import ErrorMessage from '../../ui/ErrorMessage';

import styles from './Movies.module.css';

const Movies = () => {

  const { isLoading,
    isError,
    responsePopular,
    responseBest,
    responseFilms,
    responseSerials,
    responseCartoons } = useMoviesQuery()

  if (!isLoading) return <MoviesSkeleton />

  if (isError) return <ErrorMessage />

  const serializeDataForCarousel = (data) => {
    return data.map(row => {
      return (
        <RouterLink to={`/movie/${row.kinopoiskId}`} key={row.id}>
          <BearSlideImage imageUrl={row.posterUrlPreview}>
          </BearSlideImage>
        </RouterLink>
      )
    })
  }

  const carouselArray = [
    {
      title: "Популярные фильмы",
      url: "/popular",
      data: serializeDataForCarousel(responsePopular.data.items),
      playTime: 3000
    },
    {
      title: "Топ лучших фильмов",
      url: "/best",
      data: serializeDataForCarousel(responseBest.data.items),
      playTime: 4000
    },
    {
      title: "Мультфильмы",
      url: "/cartoons",
      data: serializeDataForCarousel(responseCartoons.data.items),
      playTime: 5000
    },
    {
      title: "Фильмы",
      url: "/films",
      data: serializeDataForCarousel(responseFilms.data.items),
      playTime: 6000
    },
    {
      title: "Сериалы",
      url: "/serials",
      data: serializeDataForCarousel(responseSerials.data.items),
      playTime: 7000
    }
  ]

  return (
    <Stack direction="column">
      {carouselArray.map((array, i) => {
        return (
          <div key={i}>
            <p style={{ padding: "10px 0 20px", margin: "0" }}>
              <Link
                component={RouterLink}
                to={array.url}
                sx={{ color: "black", textDecoration: "none" }}
                variant="h4">{array.title}</Link>
            </p>
            <BearCarousel
              className={styles.carousel}
              key={i}
              data={array.data}
              isEnableNavButton={true}
              isEnableLoop={true}
              spaceBetween={20}
              isEnableAutoPlay={true}
              autoPlayTime={array.playTime}
              breakpoints={{
                375: {
                  isEnableNavButton: false,
                  isEnableAutoPlay: false
                },
                640: {
                  slidesPerView: 2,
                  isEnableNavButton: false,
                  isEnableAutoPlay: false
                },
                768: {
                  slidesPerView: 3,
                  isEnableNavButton: false
                },
                1200: {
                  slidesPerView: 5
                }
              }}
            />
          </div>
        )
      })}
    </Stack >
  )
};

export default Movies;