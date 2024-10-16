import { configureStore } from '@reduxjs/toolkit'

import { kinopoiskApi } from '../services/kinopoiskApi'

import currentQueryReducer from './slices/currentQuerySlice'
import searchQueryReducer from './slices/searchQuerySlice'

export const store = configureStore({
  reducer: {
    [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
    currentQuery: currentQueryReducer,
    searchQuery: searchQueryReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kinopoiskApi.middleware),
})