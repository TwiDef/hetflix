import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  countries: "",
  genreId: "",
  order: "NUM_VOTE",
  type: "",
  year: "",
  page: 1
}

export const curentQuerySlice = createSlice({
  name: 'curentQuerySlice',
  initialState,
  reducers: {

  },
})

export const { } = curentQuerySlice.actions

export default curentQuerySlice.reducer