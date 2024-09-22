import React from 'react';
import { Typography, Box, Grid, Divider, Chip } from '@mui/material';
import Theme from '../Theme';

const skills = {
  aiMlOps: {
    "Advanced AI/ML Solutions": ["ETL", "Pipelines", "Apache", "Kafka", "LangChain"],
    "Model Deployment": ["Docker", "Kubernetes", "RESTful", "Django", "Flask"],
    "Technical Proficiency": ["Python", "TensorFlow", "PyTorch", "Keras", "HuggingFace", "LLMs", "Transformers", "GPT", "BERT", "Vector databases", "Pinecone"],
    "Data Processing": ["Apache Spark", "Google Cloud"],
    "Analytical Skills": ["Statistical analysis", "Predictive modeling", "Classification", "Time Series Analysis", "Hypothesis testing"],
    "Data visualization": ["Matplotlib", "PowerBI", "Plotly", "Seaborn"]
  },
  webDevelopment: {
    "MERN Stack Expertise": ["Full-stack", "Javascript", "MERN", "MongoDB", "Express.js", "React", "Node.js"],
    "UI/UX Design": ["Material-UI"]
  }
};

const SkillList = ({ title, skills }) => (
  <Box id='skills' p={{ xs: 1, sm: 2 }}>
    <Typography
      variant='h4'
      gutterBottom
      sx={{ color: Theme.color.primaryDark, fontFamily: Theme.fonts.primaryFont, fontStyle: 'italic', fontSize: { xs: '0.5rem', sm: '1rem', md: '1.5rem' } }}>
      {title}
    </Typography>

    <Grid container spacing={2}>
      {Object.entries(skills).map(([skill, skillArray], index) => (
        <Grid item xs={12} key={index}>
          <Grid container spacing={1}>
            {skillArray.map((tech, index) => (
              <Grid item key={index}>
                <Chip
                  label={tech}
                  clickable
                  sx={{
                    backgroundColor: Theme.color.primaryDark,
                    fontFamily: Theme.fonts.primaryFont,
                    color: Theme.color.white,
                    fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1rem' },
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      ))}
    </Grid>
  </Box>
);

const Skills = () => (
  <Grid container sx={{ backgroundColor: Theme.color.primaryColor, minHeight: '100vh' }} boxShadow={3}>
    <Grid item xs={12} md={8} lg={12} sx={{ padding: { xs: 2, sm: 4, md: 6 }, mx: 'auto' }}>
      <Typography variant="h2" gutterBottom sx={{ color: Theme.color.primaryDark, fontFamily: Theme.fonts.primaryFont, textAlign: 'right', fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' } }} mt={2}>
        Professional Expertise
      </Typography>
      <Divider />
      <SkillList title="AI/ML Engineering and MLOps" skills={skills.aiMlOps} />
      <Divider sx={{ my: 2 }} />
      <SkillList title="Web Development" skills={skills.webDevelopment} />
    </Grid>
  </Grid>
);

export default Skills;
