import React from 'react';
import { AppBar, Typography, Box, SvgIcon, IconButton, Container, Grid } from '@mui/material';
import Theme from '../Theme';
import { GithubIcon, LinkedInIcon, InstagramIcon } from '../Utils/Svg';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

const Footer = () => {
  return (
    <AppBar
      position="static"
      component="footer"
      sx={{
        backgroundColor: '#191919',
        color: 'white',
        paddingTop: { xs: 2, sm: 3, md: 4 },
        paddingBottom: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" gap={2}>
              {/* Email */}
              <Box display="flex" alignItems="center">
                <MailOutlineOutlinedIcon />
                <Typography
                  variant="body1"
                  sx={{
                    marginLeft: 1,
                    fontFamily: Theme.fonts.primaryFonts,
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                  }}
                >
                  <a
                    href="mailto:shrisan636@gmail.com"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    shrisan636@gmail.com
                  </a>
                </Typography>
              </Box>

              {/* Phone */}
              <Box display="flex" alignItems="center">
                <CallOutlinedIcon />
                <Typography
                  variant="body1"
                  sx={{
                    marginLeft: 1,
                    fontFamily: Theme.fonts.primaryFonts,
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                  }}
                >
                  <a
                    href="tel:+917008721262"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    +91 7008721262
                  </a>
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Social Media Links */}
          <Grid item xs={12} md={4} display="flex" justifyContent={{ xs: 'center', md: 'flex-start' }}>
            <Box display="flex" gap={2}>
              {/* GitHub */}
              <IconButton
                component="a"
                href="https://github.com/Shri-adi31"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                color="inherit"
              >
                <SvgIcon component={GithubIcon} viewBox="0 0 48 48" sx={{ fontSize: { xs: 24, sm: 28, md: 32 } }} />
              </IconButton>

              {/* LinkedIn */}
              <IconButton
                component="a"
                href="https://in.linkedin.com/in/shriman-aditya-171383226"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                color="inherit"
              >
                <SvgIcon component={LinkedInIcon} viewBox="0 0 40 40" sx={{ fontSize: { xs: 24, sm: 28, md: 32 } }} />
              </IconButton>

              {/* Instagram */}
              <IconButton
                component="a"
                href="https://www.instagram.com/shriman_aditya31/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                color="inherit"
              >
                <SvgIcon component={InstagramIcon} viewBox="0 0 40 40" sx={{ fontSize: { xs: 24, sm: 28, md: 32 } }} />
              </IconButton>
            </Box>
          </Grid>

          {/* Copyright */}
          <Grid item xs={12} md={4} display="flex" justifyContent={{ xs: 'center', md: 'flex-end' }}>
            <Typography
              variant="body2"
              sx={{
                fontFamily: Theme.fonts.primaryFonts,
                fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' },
                textAlign: 'center',
              }}
            >
              &copy; {new Date().getFullYear()} Aditya Creations. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default Footer;
