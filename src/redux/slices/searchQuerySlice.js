import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  genreId: "",
  order: "NUM_VOTE",
  type: "",
  page: 1,
  keyword: ""
}

export const searchQuerySlice = createSlice({
  name: 'searchQuerySlice',
  initialState,
  reducers: {
    onChangeKeyword: (state, action) => ({
      ...state,
      keyword: action.payload.keyword
    })
  },
})

export const { onChangeKeyword } = searchQuerySlice.actions

export default searchQuerySlice.reducer