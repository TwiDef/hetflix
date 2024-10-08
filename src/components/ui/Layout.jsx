import React from 'react';
import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <Box sx={{ bgcolor: "#757575" }}>
      <Container fixed sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Box sx={{ p: 4 }} />
        <Navbar />
        <Outlet />
        <Footer />
      </Container>
    </Box>
  );
};

export default Layout;