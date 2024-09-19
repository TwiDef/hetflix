import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  genreId: "",
  order: "NUM_VOTE",
  type: "",
  page: 1
}

export const curentQuerySlice = createSlice({
  name: 'curentQuerySlice',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload
    }
  },
})

export const { setPage } = curentQuerySlice.actions

export default curentQuerySlice.reducer