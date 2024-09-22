import React from 'react';
import { Grid, Box, Typography, Paper, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Theme from '../Theme';
import image1 from '../Utils/Assets/IMG20231220184255.jpg';
import image2 from '../Utils/Assets/IMG20231220182602.jpg';

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  },
};

const Achievements = () => {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const { ref: imageRef1, inView: imageInView1 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const { ref: imageRef2, inView: imageInView2 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box id='achievements' sx={{ minHeight: "100vh", backgroundColor: Theme.color.secondaryColor, py: { xs: 4, sm: 6, md: 8 } }}>
      <Container maxWidth="lg">
        {/* Section Title */}
        <Box sx={{ mb: { xs: 4, sm: 6 }, textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            sx={{
              color: 'white',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
              fontFamily: Theme.fonts.secondaryFont,
              fontWeight: 'bold',
            }}
          >
            Achievements
          </Typography>
        </Box>
        
        {/* Content Grid */}
        <Grid container spacing={4} alignItems="center">
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              ref={textRef}
              initial="hidden"
              animate={textInView ? "visible" : "hidden"}
              variants={fadeInVariants}
            >
              <Typography 
                variant="body1" 
                sx={{
                  color: 'white',
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem', lg: '1.4rem' },
                  fontFamily: Theme.fonts.secondaryFont,
                  lineHeight: 1.6,
                  textAlign: 'justify',
                }}
              >
                I am excited to announce that I was a finalist in the Smart India Hackathon 2023, organized by the Ministry of AYUSH under the Department of National Commission for Indian System of Medicine. Our project, ADDA (AI Dermatology Diagnostic Assistant), aimed to revolutionize virtual doctor-patient interactions.
                <br /><br />
                ADDA seamlessly integrates advanced AI models, including BioBERT and GPT-2, to provide insightful question-answering that mimics a real doctor's responses. To enhance diagnostic precision, we incorporated a Convolutional Neural Network (CNN) for detailed skin image analysis.
                <br /><br />
                The objective of our project was to develop an AI-based chatbot with robust image processing capabilities for the preliminary diagnosis of dermatological conditions. ADDA automates patient query resolution by training on diverse question-answer pairs, offering informative and accurate responses.
                <br /><br />
                This innovative combination of natural language processing and image analysis demonstrates the potential of AI in advancing healthcare solutions.
              </Typography>
            </motion.div>
          </Grid>
          
          {/* Images Section */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2} justifyContent="center">
              {/* Image 1 */}
              <Grid item xs={6} sm={4} md={12}>
                <motion.div
                  ref={imageRef1}
                  initial="hidden"
                  animate={imageInView1 ? "visible" : "hidden"}
                  variants={fadeInVariants}
                >
                  <Paper
                    component="img"
                    src={image1}
                    alt="Smart India Hackathon Logo"
                    elevation={6}
                    sx={{
                      width: '100%',
                      maxWidth: { xs: '150px', sm: '200px', md: '250px', lg: '300px' },
                      height: 'auto',
                      objectFit: 'contain',
                      borderRadius: 2,
                      mx: 'auto',
                    }}
                  />
                </motion.div>
              </Grid>
              
              {/* Image 2 */}
              <Grid item xs={6} sm={4} md={12}>
                <motion.div
                  ref={imageRef2}
                  initial="hidden"
                  animate={imageInView2 ? "visible" : "hidden"}
                  variants={fadeInVariants}
                >
                  <Paper
                    component="img"
                    src={image2}
                    alt="ADDA Project Screenshot"
                    elevation={6}
                    sx={{
                      width: '100%',
                      maxWidth: { xs: '150px', sm: '200px', md: '250px', lg: '300px' },
                      height: 'auto',
                      objectFit: 'contain',
                      borderRadius: 2,
                      mx: 'auto',
                    }}
                  />
                </motion.div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Achievements;
