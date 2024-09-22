// models/Contact.js

const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
    trim: true,
    maxlength: [50, 'Name cannot exceed 50 characters.'],
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    trim: true,
    lowercase: true,
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      'Please enter a valid email address.',
    ],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required.'],
    trim: true,
    match: [/^\+?\d{10,15}$/, 'Please enter a valid phone number.'],
  },
  message: {
    type: String,
    required: [true, 'Message is required.'],
    trim: true,
    maxlength: [500, 'Message cannot exceed 500 characters.'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create index on email for faster queries
contactSchema.index({ email: 1 });

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;
