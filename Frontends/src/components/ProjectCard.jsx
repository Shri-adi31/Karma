import React from 'react';
import { Card, CardActionArea, CardMedia, Typography, Button, SvgIcon, Box } from '@mui/material';
import { GithubIcon } from '../Utils/Svg';

const ProjectCard = ({ img, alt, title, description,icon,viewbox,GitLink,yourLink}) => {
  return (
    <Card sx={{ maxWidth: 1000, position: 'relative' }}>
      <CardActionArea>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            height="300"
            image={img}
            alt={alt}
            sx={{ objectFit: 'cover' }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.3)', 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
              color: 'white', 
            }}
          >
            <Typography gutterBottom variant="h4" >
              {title}
            </Typography>
            <Typography variant="body1" color="inherit" >
              {description}
            </Typography>
          </Box>
        </Box>
      </CardActionArea>
      <CardActionArea>
        <Button component="a" href={GitLink} target="_blank" rel="noopener noreferrer">
          <SvgIcon component={GithubIcon} viewBox="0 0 50 50" sx={{ fontSize: 40 }} />
        </Button>
        <Button component="a" href={yourLink} target="_blank" rel="noopener noreferrer">
            <SvgIcon component={icon} viewBox={viewbox} sx={{ fontSize: 40 }} />
        </Button>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
