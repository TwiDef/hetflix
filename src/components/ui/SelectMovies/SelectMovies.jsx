import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetGenresQuery } from '../../../services/kinopoiskApi';
import { Stack, FormControl, InputLabel, Select, MenuItem, Box, Button } from '@mui/material';
import { resetQuery, setQuery } from '../../../redux/slices/currentQuerySlice';
import CloseIcon from '@mui/icons-material/Close';

import styles from './SelectMovies.module.css';

const SelectMovies = ({ currentGenreId }) => {
  const dispatch = useDispatch()
  const { order, genreId } = useSelector(state => state.currentQuery)
  const { data } = useGetGenresQuery()

  return (
    <Stack sx={{
      flexDirection: { sm: "column", md: "row" },
      alignItems: "center",
      justifyContent: "center"
    }} gap={2} mb={2}>

      <FormControl sx={{ width: { xs: 1 / 1, md: 1 / 3 } }} size="small">
        <InputLabel className={styles.label}
          sx={{ "&.Mui-focused": { color: "#ffffff" } }}>cортировка</InputLabel>
        <Select
          sx={{ "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#333333" } }}
          value={order}
          onChange={(e) => dispatch(setQuery({ order: e.target.value }))}
        >
          <MenuItem value={"RATING"}>по рейтинrу</MenuItem>
          <MenuItem value={"NUM_VOTE"}>по голосам</MenuItem>
        </Select>
      </FormControl>

      {currentGenreId !== 18 &&
        <FormControl sx={{ width: { xs: 1 / 1, md: 1 / 3 } }} size="small">
          <InputLabel className={styles.label}
            sx={{ "&.Mui-focused": { color: "#ffffff" } }}>по жанру</InputLabel>
          <Select
            sx={{ "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#333333" } }}
            value={genreId}
            onChange={(e) => dispatch(setQuery({ genreId: e.target.value }))}
          >
            {data && data.genres.map((type) => {
              if (type.genre) {
                return (
                  <MenuItem key={type.id} value={type.id}>{type.genre}</MenuItem>
                )
              }
            })}
          </Select>
        </FormControl>
      }

      <Box >
        <Button
          onClick={() => dispatch(resetQuery())}
          variant="outlined" startIcon={<CloseIcon />} color="#333333">
          Сбросить
        </Button>
      </Box>
    </Stack>
  );
};

export default SelectMovies;