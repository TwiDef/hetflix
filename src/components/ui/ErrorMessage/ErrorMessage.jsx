import React from 'react';
import { Box, Typography } from '@mui/material';

const ErrorMessage = () => {
  return (
    <Box m="auto" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <img width={300} src="https://cdn-icons-png.flaticon.com/512/15410/15410649.png" alt="" />
      <Typography
        textAlign="center"
        variant="h6"
        color="#333333"
        fontWeight={600}>Произошла ошибка, обновите страницу</Typography>
    </Box>
  );
};

export default ErrorMessage;