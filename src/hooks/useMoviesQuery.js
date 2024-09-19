import { useGetTopFilmsQuery, useGetFilmsQuery } from '../services/kinopoiskApi';
import { useSelector } from 'react-redux';
import { TOP_LISTS } from '../constants';

const useMoviesQuery = () => {
  const { page, order, genreId } = useSelector(state => state.currentQuery)

  const responsePopular = useGetTopFilmsQuery({
    type: TOP_LISTS[0].value,
    page
  })
  const responseBest = useGetTopFilmsQuery({
    type: TOP_LISTS[1].value,
    page
  })

  const responseFilms = useGetFilmsQuery({
    type: "FILM",
    order,
    genreId: "1",
    page
  })
  const responseSerials = useGetFilmsQuery({
    type: "TV_SERIES",
    order,
    genreId: "1",
    page
  })
  const responseCartoons = useGetFilmsQuery({
    type: "FILM",
    order,
    genreId: "18",
    page
  })

  const isLoading =
    responsePopular.isFetching ||
    responseBest.isFetching ||
    responseFilms.isFetching ||
    responseSerials.isFetching ||
    responseCartoons.isFetching

  const isError =
    responsePopular.isError ||
    responseBest.isError ||
    responseFilms.isError ||
    responseSerials.isError ||
    responseCartoons.isError

  return {
    isLoading,
    isError,
    responsePopular,
    responseBest,
    responseFilms,
    responseSerials,
    responseCartoons
  }
};

export default useMoviesQuery;