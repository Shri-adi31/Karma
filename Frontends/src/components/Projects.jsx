import React from 'react';
import { Grid, Typography } from '@mui/material';
import Theme from '../Theme';
import ProjectCard from './ProjectCard';
import { YouTubeIcon,LinkIcon } from '../Utils/Svg';

const projects = [
  {
    img: require('../Utils/Assets/Youtube.jpg'),
    alt: 'Youtube clone',
    title: 'YouTube Clone',
    description: 'A YouTube clone built using React, MUI, and the RapidAPI (YouTube) API.',
    icon: YouTubeIcon,
    viewbox: '0 0 48 48',
    Gitlink: 'https://github.com/Shri-adi31/Youtube-Clone',
    yourlink:'https://vibehype.netlify.app'
  },
  {
    img: require('../Utils/Assets/Sprectrogram.jpg'),
    alt: 'Spectrogram Image',
    title: 'Music Genre Prediction',
    description: 'Music Genre Prediction using Mel-Spectrogram and GTzan dataset.', 
    viewbox: '0 0 100 100',
    Gitlink: 'https://colab.research.google.com/drive/1cnbWXoC9qLB8HuvypEyIiEL25Xy04cHd',
  },
  {
    img: require('../Utils/Assets/Sotifyeda.png'),
    alt: 'Spotify EDA image',
    title: 'Spotify Dashboard',
    description: 'Spotify PowerBI Dashboard.',
    viewbox: '0 0 100 100',
    Gitlink: 'https://github.com/Shri-adi31/Spotify-PowerBI-EDA.git',
  },
  {
    img: require('../Utils/Assets/nifty50.png'),
    alt: 'nifty50 ETF Dashboard image',
    title: 'Nifty50 ETF forecasting',
    description: 'Nifty50 ETF forecasting using LSTM and Dashboard.',
    icon: LinkIcon,
    viewbox: '0 0 100 100',
    Gitlink: 'https://github.com/Shri-adi31/Nifty50-Forecasting-using-LSTM.git',
    yourlink: 'https://nifty50etf.netlify.app/'
  }
];

const Projects = () => {
  return (
    <Grid id="projects"
      container
      sx={{
        minHeight: '100vh',
        backgroundColor: Theme.color.primaryColor,
        p: { xs: 2, sm: 4, md: 6 }
      }}
      boxShadow={3}
    >
      <Grid item xs={12}>
        <Typography
          variant="h2"
          sx={{
            color: Theme.color.primaryDark,
            fontFamily: Theme.fonts.primaryFont,
            fontWeight: 'regular',
            textAlign: 'center',
            fontSize: { xs: '1rem', sm: '2rem', md: '3rem' },
            mt: { xs: 2, sm: 4, md: 6 }
          }}
        >
          Project Gallery
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: Theme.color.primaryDark,
            fontFamily: Theme.fonts.secondaryFont,
            fontStyle: 'italic',
            textAlign: 'center',
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
            mt: { xs: 1, sm: 1.5, md: 2 },
            mb: { xs: 2, sm: 4, md: 6 }
          }}
        >
          Here are some projects I have worked on.
        </Typography>
      </Grid>
      <Grid container spacing={2} justifyContent="center" alignItems="flex-start">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard
              img={project.img}
              alt={project.alt}
              title={project.title}
              description={project.description}
              icon={project.icon}
              viewbox={project.viewbox}
              GitLink={project.Gitlink}
              yourLink={project.yourlink}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Projects;
