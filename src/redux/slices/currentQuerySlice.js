import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  genreId: "",
  order: "NUM_VOTE",
  type: "",
  page: 1
}

export const currentQuerySlice = createSlice({
  name: 'currentQuerySlice',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload
    },
    setOrder: (state, action) => {
      state.order = action.payload
    },
    setGenreId: (state, action) => {
      state.genreId = action.payload
    }
  },
})

export const { setPage, setOrder, setGenreId } = currentQuerySlice.actions

export default currentQuerySlice.reducer