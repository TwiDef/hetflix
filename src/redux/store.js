import { configureStore } from '@reduxjs/toolkit'

import { kinopoiskApi } from '../services/kinopoiskApi'

import curentQueryReducer from './slices/curentQuerySlice'

export const store = configureStore({
  reducer: {
    [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
    currentQuery: curentQueryReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kinopoiskApi.middleware),
})
