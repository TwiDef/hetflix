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
    }
  },
})

export const { setPage } = currentQuerySlice.actions

export default currentQuerySlice.reducer