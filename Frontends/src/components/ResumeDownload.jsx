// src/components/ResumeDownload.jsx

import React from 'react';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import Theme from '../Theme'; // Adjust based on your theme setup
import resume from '../Utils/resume.pdf'; 

const ResumeDownload = () => {
  const handleView = () => {
    // Open the PDF in a new browser tab
    window.open(resume, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      variant="contained"
      startIcon={<DownloadIcon />}
      onClick={handleView}
      sx={{
        fontFamily: Theme.fonts.secondaryFont,
        paddingY: 1,
        fontSize: { xs: '1rem', sm: '1.1rem' },
      }}
    >
      View Resume
    </Button>
  );
};

export default ResumeDownload;
