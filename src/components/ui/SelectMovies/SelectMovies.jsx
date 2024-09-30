import React from 'react';
import { Stack, FormControl, InputLabel, Select, MenuItem, Box, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const SelectMovies = () => {

  return (
    <Stack sx={{
      flexDirection: { sm: "column", md: "row" },
      alignItems: "center",
      justifyContent: "center"
    }} gap={2} mb={2}>

      <FormControl sx={{ width: { xs: 1 / 2, md: 1 / 3 } }} size="small">
        <InputLabel sx={{ "&.Mui-focused": { color: "#ffffff" } }}>Сортировка</InputLabel>
        <Select
          sx={{ "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#333333" } }}
          onChange={() => { }}
        >
          <MenuItem value={1}>Exaple_1</MenuItem>
          <MenuItem value={2}>Exaple_2</MenuItem>
          <MenuItem value={3}>Exaple_3</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ width: { xs: 1 / 2, md: 1 / 3 } }} size="small">
        <InputLabel sx={{ "&.Mui-focused": { color: "#ffffff" } }}>Жанр</InputLabel>
        <Select
          sx={{ "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#333333" } }}
          onChange={() => { }}
        >
          <MenuItem value={1}>Exaple_1</MenuItem>
          <MenuItem value={2}>Exaple_2</MenuItem>
          <MenuItem value={3}>Exaple_3</MenuItem>
        </Select>
      </FormControl>

      <Box >
        <Button variant="outlined" startIcon={<CloseIcon />} color="#333333">
          Сбросить
        </Button>
      </Box>
    </Stack>
  );
};

export default SelectMovies;