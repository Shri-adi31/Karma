// src/components/ContactForm.jsx

import React, { useState } from 'react';
import { Box, TextField, Button, Grid, Typography, Alert } from '@mui/material';
import Theme from '../Theme';
import WavingHandRoundedIcon from '@mui/icons-material/WavingHandRounded';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios'; // Import Axios

const ContactForm = () => {
  const initialFormState = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    let temp = {};
    temp.name = formData.name ? "" : "This field is required.";
    temp.email = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(formData.email) ? "" : "Email is not valid.";
    temp.phone = (/^\+?\d{10,15}$/).test(formData.phone) ? "" : "Phone number is not valid.";
    temp.message = formData.message ? "" : "This field is required.";
    setErrors({
      ...temp
    });

    return Object.values(temp).every(x => x === "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: ''
    });
    setSubmitError('');
    setSuccessMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        // Replace 'http://localhost:5000/api/contact' with your backend URL if different
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, formData);
        if (response.status === 201) {
          setSuccessMessage("Your message has been sent successfully!");
          setFormData(initialFormState);
        }
      } catch (error) {
        console.error("Error submitting the form:", error);
        setSubmitError("There was an error sending your message. Please try again later.");
      }
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ 
        p: { xs: 2, sm: 4 }, 
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        borderRadius: 2, 
        boxShadow: 3, 
        width: '100%', 
        opacity: { xs: 0.95, sm: 1 },
        transition: 'opacity 0.3s ease',
      }}
    >
      <Typography 
        variant="h5" 
        sx={{ 
          mb: 3, 
          color: Theme.color.primaryDark, 
          fontFamily: Theme.fonts.secondaryFont, 
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'center', sm: 'flex-start' }
        }}
        gutterBottom
      >
        A Nudge <WavingHandRoundedIcon sx={{ ml: 1 }} />
      </Typography>

      {/* Display Success or Error Messages */}
      {successMessage && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {successMessage}
        </Alert>
      )}
      {submitError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {submitError}
        </Alert>
      )}

      <Grid container spacing={2}>
        {/* Name Field */}
        <Grid item xs={12}>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={handleChange}
            error={Boolean(errors.name)}
            helperText={errors.name}
            required
          />
        </Grid>

        {/* Email Field */}
        <Grid item xs={12}>
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={errors.email}
            required
          />
        </Grid>

        {/* Phone Number Field */}
        <Grid item xs={12}>
          <TextField
            label="Phone Number"
            name="phone"
            variant="outlined"
            fullWidth
            value={formData.phone}
            onChange={handleChange}
            error={Boolean(errors.phone)}
            helperText={errors.phone}
            required
          />
        </Grid>

        {/* Message Field */}
        <Grid item xs={12}>
          <TextField
            label="Message"
            name="message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            error={Boolean(errors.message)}
            helperText={errors.message}
            required
          />
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12}>
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth 
            endIcon={<SendIcon />}
            sx={{ 
              fontFamily: Theme.fonts.primaryFont, 
              paddingY: 1.5,
              fontSize: { xs: '1rem', sm: '1.1rem' }
            }}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
