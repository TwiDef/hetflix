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

  if (isLoading) return <MoviesSkeleton />

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
      icon: "https://cdn-icons-png.flaticon.com/512/708/708865.png",
      url: "/popular",
      data: serializeDataForCarousel(responsePopular.data.items),
      playTime: 3000
    },
    {
      title: "Топ лучших фильмов",
      icon: "https://cdn-icons-png.flaticon.com/512/3865/3865233.png",
      url: "/best",
      data: serializeDataForCarousel(responseBest.data.items),
      playTime: 4000
    },
    {
      title: "Мультфильмы",
      url: "/cartoons",
      icon: "https://cdn-icons-png.flaticon.com/512/404/404741.png",
      data: serializeDataForCarousel(responseCartoons.data.items),
      playTime: 5000
    },
    {
      title: "Фильмы",
      url: "/films",
      icon: "https://cdn-icons-png.flaticon.com/512/777/777242.png",
      data: serializeDataForCarousel(responseFilms.data.items),
      playTime: 6000
    },
    {
      title: "Сериалы",
      url: "/serials",
      icon: "https://cdn-icons-png.flaticon.com/512/2798/2798007.png",
      data: serializeDataForCarousel(responseSerials.data.items),
      playTime: 7000
    }
  ]

  return (
    <Stack direction="column">
      {carouselArray.map((array, i) => {
        return (
          <div key={i}>
            <Stack direction="row" alignItems="center" gap={1}>
              <img width={40} height={40} src={array.icon} alt="category-icon" />
              <p style={{ padding: "10px 0 20px", margin: "0" }}>
                <Link
                  component={RouterLink}
                  to={array.url}
                  sx={{ color: "black", textDecoration: "none" }}
                  variant="h4">{array.title}</Link>
              </p>
            </Stack>
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