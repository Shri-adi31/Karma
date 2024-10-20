import React from 'react';
import { Grid, Box, Typography, Container, Paper } from '@mui/material';
import Theme from '../Theme';
import ResumeDownload from './ResumeDownload';
import me from '../Utils/Assets/me.jpg';; // Adjust the path as necessary

const About = () => {
  return (
    <Grid
      id='about'
      container
      sx={{
        backgroundColor: Theme.color.primaryDark,
        minHeight: '100vh',
        padding: { xs: 2, sm: 4, md: 6 },
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
        >
          {/* Profile Image Section with Elevated Tile Effect */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={6} // Adjust elevation as needed
              sx={{
                padding: 2,
                borderRadius: 2,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 12,
                },
              }}
            >
              <Box
                component="img"
                src={me}
                alt="Profile Picture"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '12px', // Slight rounding for a modern look
                }}
              />
            </Paper>
          </Grid>

          {/* Description Section */}
          <Grid item xs={12} md={8}>
            <Box textAlign={{ xs: 'center', md: 'left' }}>
              <Typography
                variant='h3'
                sx={{
                  fontFamily: Theme.fonts.secondaryFont,
                  color: Theme.color.white,
                  fontWeight: '300',
                  fontStyle: 'italic',
                  mb: { xs: 2, sm: 3 },
                  fontSize: { xs: '2rem', sm: '3rem', md: '4rem', lg: '5rem' },
                }}
              >
                About Me
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  fontFamily: Theme.fonts.primaryFont,
                  fontWeight: '300',
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem', lg: '1.4rem' },
                  lineHeight: 1.6,
                }}
              >
                In the dynamic realm of technology, I am a student developer specializing in AI/ML engineering, data engineering, and web development. My technical proficiency is complemented by strong communication skills and a proven ability to work effectively in teams. I excel at crafting robust data pipelines, designing intuitive dashboards, and implementing precise machine learning models. With a commitment to clarity and collaboration, I aim to elevate tech projects to new heights of success.
              </Typography>
              <ResumeDownload />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default About;
