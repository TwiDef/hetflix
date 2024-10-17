import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetFilmsQuery } from './../../../services/kinopoiskApi';
import { onChangeKeyword } from '../../../redux/slices/searchQuerySlice';

import { Autocomplete, CircularProgress, TextField } from '@mui/material';

import styles from './Search.module.css';
import { Link, useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [textInput, setTextInput] = React.useState("")
  const { genreId, order, type, page, keyword } = useSelector(state => state.searchQuery)
  const { data, isFetching } = useGetFilmsQuery({ genreId, order, type, page, keyword })

  const movieType = {
    FILM: "Фильм",
    TV_SERIES: "Сериал",
    TV_SHOW: "ТВ-Шоу",
    MINI_SERIES: "Мини-сериал",
    VIDEO: "Видео"
  }

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(onChangeKeyword({ keyword: textInput }))
    }, 500);

    return () => clearTimeout(timeoutId)
  }, [textInput])

  return (
    <Autocomplete
      className={styles.autocomplete}
      getOptionLabel={option => option.nameRu ?
        `${option.nameRu} - ${movieType[option.type]} - ${option.year}г` :
        `${option.nameOriginal}-${movieType[option.type]} - ${option.year}г`}

      options={data && data.items}
      onInputChange={(e) => setTextInput(e.target.value)}
      onChange={(_, value) => navigate(`/movie/${value.kinopoiskId}`)}
      renderInput={(params) => {
        return (
          <>
            <TextField
              sx={{
                "& label.Mui-focused": { color: "#ffffff", top: 4 },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": { borderColor: "#dddddd" }
                }
              }}
              {...params}
              label="Поиск..."
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {isFetching ? <CircularProgress /> : ""}
                    {params.InputProps.endAdornment}
                  </>
                )
              }} />
          </>
        )
      }}
    />
  );
};

export default Search;

