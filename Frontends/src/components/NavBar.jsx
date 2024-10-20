import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem
} from '@mui/material';
import { Link } from 'react-scroll';
import Theme from '../Theme';
import MenuIcon from '@mui/icons-material/Menu';
import Signature from '../Utils/Assets/Signature.png';

const NavBar = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navLinks = [
    { to: 'about', label: 'About', offset: -58 },
    { to: 'projects', label: 'Projects', offset: -60 },
    { to: 'skills', label: 'Skills', offset: -154 },
    { to: 'achievements', label: 'Achievements', offset: -58 },
    { to: 'communication', label: 'Contact', offset: -58 },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: Theme.color.primaryDark,
        fontFamily: Theme.fonts.primaryFont,
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Button color="inherit" sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }}>
            <Link to="build" smooth={true} duration={500} offset={-58}>
            <Box
                component="img"
                src={Signature} // Your APNG file
                alt="Shriman Aditya Signature"
                sx={{
                  width: 120, // Adjust the size as needed
                  height: 'auto', // Maintain aspect ratio
                  display: 'block',
                }}
              />
            </Link>
          </Button>
        </Box>
        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              keepMounted
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              {navLinks.map((item) => (
                <MenuItem key={item.label} onClick={handleClose}>
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={800}
                    offset={item.offset}
                    onClick={handleClose}
                  >
                    {item.label}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navLinks.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}
              >
                <Link to={item.to} smooth={true} duration={800} offset={item.offset}>
                  {item.label}
                </Link>
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
