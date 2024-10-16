import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const KINOPOISK_API_KEY = import.meta.env.VITE_KINOPOISK_KEY

export const kinopoiskApi = createApi({
  reducerPath: 'kinopoiskApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kinopoiskapiunofficial.tech/api/',

    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json')
      headers.set('X-API-KEY', KINOPOISK_API_KEY)
      return headers
    }
  }),
  endpoints: (builder) => ({
    getTopFilms: builder.query({
      query: ({ type, page }) => {
        return `/v2.2/films/collections?type=${type}&page=${page}`
      }
    }),
    getFilms: builder.query({
      query: ({
        genreId,
        order = "NUM_VOTE",
        type = "FILM",
        page,
        keyword = ""
      }) => {
        return `v2.2/films?genres=${genreId}&order=${order}&type=${type}&page=${page}&keyword=${keyword}`
      }
    }),
    getMovieDetail: builder.query({
      query: (id) => {
        return `/v2.2/films/${id}`
      }
    }),
    getSequelsAndPrequels: builder.query({
      query: (id) => {
        return `/v2.1/films/${id}/sequels_and_prequels`
      }
    }),
    getStaff: builder.query({
      query: (id) => {
        return `/v1/staff?filmId=${id}`
      }
    }),
    getGenres: builder.query({
      query: () => {
        return `v2.2/films/filters`
      }
    })
  }),
})

export const {
  useGetTopFilmsQuery,
  useGetMovieDetailQuery,
  useGetSequelsAndPrequelsQuery,
  useGetStaffQuery,
  useGetFilmsQuery,
  useGetGenresQuery } = kinopoiskApi