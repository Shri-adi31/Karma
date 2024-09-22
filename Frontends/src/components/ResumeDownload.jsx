// src/components/ResumeDownload.jsx

import React from 'react';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import Theme from '../Theme'; // Adjust based on your theme setup
import resume from '../Utils/resume.pdf'; 

const ResumeDownload = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = resume;

    // Set the desired file name
    link.download = 'resume.pdf';

    // Append to the document and trigger click
    document.body.appendChild(link);
    link.click();

    // Clean up
    link.parentNode.removeChild(link);
  };

  return (
    <Button
      variant="contained"
      startIcon={<DownloadIcon />}
      onClick={handleDownload}
      sx={{
        fontFamily: Theme.fonts.secondaryFont,
        paddingY: 1,
        fontSize: { xs: '1rem', sm: '1.1rem' },
      }}
    >
      Download Resume
    </Button>
  );
};

export default ResumeDownload;
