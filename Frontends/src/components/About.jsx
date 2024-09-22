import React from 'react';
import { Grid, Box, Typography, Container } from '@mui/material';
import Theme from '../Theme';
import ResumeDownload from './ResumeDownload';

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
        <Box textAlign="left">
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
      </Container>
    </Grid>
  );
};

export default About;
