import React from 'react';
import useMoviesQuery from '../../../hooks/useMoviesQuery';
import BearCarousel, { BearSlideImage } from 'bear-react-carousel';
import { Stack } from '@mui/material';

const Movies = () => {

  const { isLoading,
    isError,
    responsePopular,
    responseBest,
    responseFilms,
    responseSerials,
    responseCartoons } = useMoviesQuery()

  if (isLoading) return <p>Loading...</p>

  if (isError) return <p>Error message</p>

  const serializeDataForCarousel = (data) => {
    return data.map(row => {
      return <BearSlideImage key={row.id} imageUrl={row.posterUrlPreview}>
      </BearSlideImage>
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
            <h2 style={{ margin: "20px 0 10px" }}>{array.title}</h2>
            <BearCarousel
              key={i}
              data={array.data}
              isEnableNavButton={true}
              isEnableLoop={true}
              spaceBetween={20}
              isEnableAutoPlay={true}
              autoPlayTime={array.playTime}
              breakpoints={{
                375: {
                  isEnableNavButton: false
                },
                640: {
                  slidesPerView: 2,
                  isEnableNavButton: false
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
    </Stack>
  )

};

export default Movies;