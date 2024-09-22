import React from 'react';
import { Box, Grid, Typography, Button, Container } from '@mui/material';
import Theme from '../Theme.js';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const splitText = (text) => {
  return text.split('').map((char, index) => (
    <motion.span key={index} variants={letterVariants}>
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  ));
};

const letterVariants = {
  hidden: {
    opacity: 0,
    x: (custom) => custom * 10,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
};

const Build = () => {
  return (
    <Grid
      id="build"
      container
      component={motion.div}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      sx={{
        backgroundColor: Theme.color.primaryColor,
        minHeight: '100vh',
        padding: { xs: 2, sm: 4, md: 6 },
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 1, sm: 2 },
            textAlign: 'center',
          }}
          component={motion.div}
          variants={containerVariants}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: Theme.fonts.primaryFont,
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem', lg: '5rem' },
              lineHeight: 1.2,
            }}
          >
            {splitText('Hello,')}
          </Typography>

          <Typography
            variant="h1"
            sx={{
              color: Theme.color.primaryDark,
              fontFamily: Theme.fonts.primaryFont,
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem', lg: '5rem' },
              lineHeight: 1.2,
            }}
          >
            {splitText('I am Shriman Aditya!')}
          </Typography>
        </Box>

        <Box
          sx={{
            mt: { xs: 2, sm: 4 },
            px: { xs: 2, sm: 6, md: 8 },
            textAlign: 'center',
          }}
          component={motion.div}
          variants={containerVariants}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: Theme.fonts.secondaryFont,
              fontWeight: 200,
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem', lg: '1.8rem' },
              lineHeight: 1.6,
            }}
          >
            Embracing minimalist principles, I engineer machine learning models, develop web applications, and architect data solutions, seamlessly integrating simplicity with powerful functionality. My approach transforms diverse technologies into cohesive, effective outcomes, ensuring clarity and efficiency across every project.
          </Typography>
        </Box>

        <Box
          sx={{
            mt: { xs: 4, sm: 6 },
            display: 'flex',
            justifyContent: 'center',
          }}
          component={motion.div}
          variants={containerVariants}
        >
          <Button >
            <Typography
              variant="h6"
              sx={{
                fontFamily: Theme.fonts.secondaryFont,
                color: Theme.color.primaryDark,
                fontWeight: 200,
                fontStyle: 'italic',
                fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
              }}
            >
              <Link to="communication" smooth={true} duration={1100} offset={-70}>
                Let's Talk...
              </Link>
            </Typography>
          </Button>
        </Box>
      </Container>
    </Grid>
  );
};

export default Build;
