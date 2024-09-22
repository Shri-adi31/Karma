

const express = require('express');
const router = express.Router();
const { submitContact } = require('../controllers/contactController');
const { body } = require('express-validator');

// POST /api/contact
router.post(
  '/contact',
  [
    body('name')
      .notEmpty()
      .withMessage('Name is required.')
      .trim()
      .escape(),
    body('email')
      .isEmail()
      .withMessage('Valid email is required.')
      .normalizeEmail(),
    body('phone')
      .matches(/^\+?\d{10,15}$/)
      .withMessage('Valid phone number is required.')
      .trim()
      .escape(),
    body('message')
      .notEmpty()
      .withMessage('Message is required.')
      .trim()
      .escape(),
  ],
  submitContact
);

module.exports = router;
