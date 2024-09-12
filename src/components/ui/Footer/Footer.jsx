import React from 'react';

import { Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Stack
      component="footer"
      sx={{
        pt: 4, pb: 4,
        flexDirection: { sm: "row" },
        justifyContent: { sm: "space-between" },
        alignItems: { sm: "center" },
        mt: "auto"
      }}>

      <Typography variant="body2" color="text.secondary" sx={{ textAlign: { sm: "center" } }}>
        &copy; {new Date().getFullYear()}&laquo;hetflix&raquo; <br />
        not for copy
      </Typography>

      <Typography variant="h5" color="text.secondary" sx={{ fontWeight: "bold" }}>
        hetflix
      </Typography>
    </Stack >
  );
};

export default Footer;