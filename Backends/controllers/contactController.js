// controllers/contactController.js

const Contact = require('../models/contact');
const { validationResult } = require('express-validator');
const logger = require('../utils/logger');

exports.submitContact = async (req, res, next) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Return validation errors
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, phone, message } = req.body;

  try {
    // Create and save new contact
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    logger.info(`New contact submission from ${email}`);

    // Respond to client
    res
      .status(201)
      .json({ message: 'Your message has been submitted successfully!' });
  } catch (error) {
    logger.error('Error submitting contact form:', error);
    next(error); // Pass to error handling middleware
  }
};
