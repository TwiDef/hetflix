import { configureStore } from '@reduxjs/toolkit'

import { kinopoiskApi } from '../services/kinopoiskApi'

import currentQueryReducer from './slices/currentQuerySlice'

export const store = configureStore({
  reducer: {
    [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
    currentQuery: currentQueryReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kinopoiskApi.middleware),
})
