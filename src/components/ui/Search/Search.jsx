import React from 'react';
import { useSelector } from 'react-redux';
import { useGetFilmsQuery } from './../../../services/kinopoiskApi';

import { Autocomplete, TextField } from '@mui/material';

import styles from './Search.module.css';

const Search = () => {

  const { genreId, order, type, page, keyword } = useSelector(state => state.searchQuery)
  const { data, isLoading } = useGetFilmsQuery({ genreId, order, type, page, keyword })

  return (
    <>
      <Autocomplete
        className={styles.autocomplete}
        freeSoloas
        options={data && data.items.map((option) => option.nameRu)}
        renderInput={(params) => {
          return <TextField {...params} label="Поиск..." />
        }}
      />
    </>
  );
};

export default Search;

