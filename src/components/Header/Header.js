import React from 'react';
import { AppBar, Toolbar,  Button, Box, InputBase, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import logo from '../assets/image.png';
import './Header.css';

const Header = () => (
  <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: '#5F66AA' }}>
    <Toolbar className="toolbar">
      <Box className="logo">
        <img src={logo} height={50} style={{ borderRadius: '20px' }} alt="logo"/>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box className="search-box">
        <InputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          sx={{ ml: 1, flex: 1, color: 'black', bgcolor: 'white', borderRadius: '5px', padding: '0 10px' }}
        />
        <IconButton type="submit" aria-label="search" sx={{ p: '10px' }}>
          <Search />
        </IconButton>
      </Box>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }} className="nav-links">
        <Button color="inherit">About</Button>
        <Button color="inherit">Features</Button>
        <Button color="inherit">Pricing</Button>
        <Button color="inherit">Gallery</Button>
        <Button color="inherit">Log In</Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
