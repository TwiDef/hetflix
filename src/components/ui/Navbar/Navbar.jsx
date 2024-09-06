import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { iconComponent, TOP_LISTS } from '../../../constants';

import { Container, Link, ListItemIcon, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import MenuIcon from '@mui/icons-material/Menu';
import MovieIcon from '@mui/icons-material/Movie';
import Box from '@mui/material/Box';

const Icon = ({ iconName }) => {
  const IconComponent = iconComponent[iconName]
  return <IconComponent />
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const trigger = useScrollTrigger({
    target: window
  })

  const handleDrawerToggle = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar sx={{ bgcolor: "#333333" }}>
        <Container maxWidth="lg">
          <Toolbar >
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer open={isOpen} onClose={handleDrawerToggle}>
              <Box sx={{ width: 300 }} onClick={handleDrawerToggle}>
                <List >
                  {TOP_LISTS.map((item) => {
                    return (
                      <Link
                        key={item.title}
                        component={RouterLink}
                        to={item.url}
                        style={{ color: "#333333", textDecoration: "none" }}>
                        <ListItem key={item} disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <Icon iconName={item.icon} />
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    )
                  })}
                </List>
              </Box>
            </Drawer>
            <Typography
              style={{ color: "white", textDecoration: "none" }}
              variant="h5"
              component={RouterLink} to="/" >
              hetflix
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  )
}

export default Navbar;