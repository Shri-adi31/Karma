// middleware/errorHandler.js

const logger = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
  // Log the error
  logger.error(err.stack);

  // Determine status code
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  // Send error response
  res.status(statusCode).json({ message });
};

module.exports = errorHandler;
