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

      <Typography variant="body2" sx={{ textAlign: { sm: "center" }, color: "white" }}>
        &copy; {new Date().getFullYear()}&laquo;hetflix&raquo; <br />
        not for copy
      </Typography>

      <Typography variant="h5" sx={{ fontWeight: "bold", color: "white" }}>
        hetflix
      </Typography>
    </Stack >
  );
};

export default Footer;