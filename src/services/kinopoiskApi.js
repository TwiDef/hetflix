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
  }),
})

export const { useGetTopFilmsQuery } = kinopoiskApi