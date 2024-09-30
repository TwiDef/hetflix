import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Stack, FormControl, InputLabel, Select, MenuItem, Box, Button } from '@mui/material';
import { setOrder, setGenreId } from '../../../redux/slices/currentQuerySlice';
import CloseIcon from '@mui/icons-material/Close';

const SelectMovies = ({ currentGenreId }) => {
  const dispatch = useDispatch()
  const { order, genreId } = useSelector(state => state.currentQuery)
  const genres = [
    {
      "id": 1,
      "genre": "триллер"
    },
    {
      "id": 2,
      "genre": "драма"
    },
    {
      "id": 3,
      "genre": "криминал"
    },
    {
      "id": 4,
      "genre": "мелодрама"
    },
    {
      "id": 5,
      "genre": "детектив"
    },
    {
      "id": 6,
      "genre": "фантастика"
    },
    {
      "id": 7,
      "genre": "приключения"
    },
    {
      "id": 8,
      "genre": "биография"
    },
    {
      "id": 9,
      "genre": "фильм-нуар"
    },
    {
      "id": 10,
      "genre": "вестерн"
    },
    {
      "id": 11,
      "genre": "боевик"
    },
    {
      "id": 12,
      "genre": "фэнтези"
    },
    {
      "id": 13,
      "genre": "комедия"
    },
    {
      "id": 14,
      "genre": "военный"
    },
    {
      "id": 15,
      "genre": "история"
    },
    {
      "id": 16,
      "genre": "музыка"
    },
    {
      "id": 17,
      "genre": "ужасы"
    },
    {
      "id": 18,
      "genre": "мультфильм"
    },
    {
      "id": 19,
      "genre": "семейный"
    },
    {
      "id": 20,
      "genre": "мюзикл"
    },
    {
      "id": 21,
      "genre": "спорт"
    },
    {
      "id": 22,
      "genre": "документальный"
    },
    {
      "id": 23,
      "genre": "короткометражка"
    },
    {
      "id": 24,
      "genre": "аниме"
    },
    {
      "id": 25,
      "genre": ""
    },
    {
      "id": 26,
      "genre": "новости"
    },
    {
      "id": 27,
      "genre": "концерт"
    },
    {
      "id": 28,
      "genre": "для взрослых"
    },
    {
      "id": 29,
      "genre": "церемония"
    },
    {
      "id": 30,
      "genre": "реальное ТВ"
    },
    {
      "id": 31,
      "genre": "игра"
    },
    {
      "id": 32,
      "genre": "ток-шоу"
    },
    {
      "id": 33,
      "genre": "детский"
    }
  ]

  const setSelectedSort = (e) => {
    dispatch(setOrder(e.target.value))
  }

  const setSelectedGenre = (e) => {
    dispatch(setGenreId(e.target.value))
  }

  const discardSorting = () => {
    dispatch(setOrder("NUM_VOTE"))
    dispatch(setGenreId(""))
  }

  return (
    <Stack sx={{
      flexDirection: { sm: "column", md: "row" },
      alignItems: "center",
      justifyContent: "center"
    }} gap={2} mb={2}>

      <FormControl sx={{ width: { xs: 1 / 1, md: 1 / 3 } }} size="small">
        <InputLabel sx={{ "&.Mui-focused": { color: "#ffffff" } }}>cортировка</InputLabel>
        <Select
          sx={{ "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#333333" } }}
          value={order}
          onChange={(e) => setSelectedSort(e)}
        >
          <MenuItem value={"RATING"}>по рейтинrу</MenuItem>
          <MenuItem value={"NUM_VOTE"}>по голосам</MenuItem>
        </Select>
      </FormControl>

      {currentGenreId !== 18 &&
        <FormControl sx={{ width: { xs: 1 / 1, md: 1 / 3 } }} size="small">
          <InputLabel sx={{ "&.Mui-focused": { color: "#ffffff" } }}>по жанру</InputLabel>
          <Select
            sx={{ "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#333333" } }}
            value={genreId}
            onChange={(e) => setSelectedGenre(e)}
          >
            {genres.map((type) => {
              return (
                <MenuItem key={type.id} value={type.id}>{type.genre}</MenuItem>
              )
            })}
          </Select>
        </FormControl>
      }

      <Box >
        <Button
          onClick={discardSorting}
          variant="outlined" startIcon={<CloseIcon />} color="#333333">
          Сбросить
        </Button>
      </Box>
    </Stack>
  );
};

export default SelectMovies;