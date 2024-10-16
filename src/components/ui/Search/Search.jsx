import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetFilmsQuery } from './../../../services/kinopoiskApi';
import { onChangeKeyword } from '../../../redux/slices/searchQuerySlice';

import { Autocomplete, TextField } from '@mui/material';

import styles from './Search.module.css';

const Search = () => {
  const dispatch = useDispatch()
  const [input, setInput] = React.useState("")
  const { genreId, order, type, page, keyword } = useSelector(state => state.searchQuery)
  const { data, isLoading } = useGetFilmsQuery({ genreId, order, type, page, keyword })

  React.useEffect(() => {
    dispatch(onChangeKeyword({ keyword: input }))
  }, [input])

  return (
    <>
      <Autocomplete
        className={styles.autocomplete}
        options={data && data.items.map((option) => option.nameRu ? option.nameRu : option.nameOriginal)}
        onInputChange={(e) => setInput(e.target.value)}
        inputValue={input}
        renderInput={(params) => {
          return <TextField
            sx={{
              "& label.Mui-focused": { color: "#ffffff", top: 4 },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": { borderColor: "#dddddd" }
              }
            }}
            {...params}
            label="Поиск..." />
        }}
      />
    </>
  );
};

export default Search;

