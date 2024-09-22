// utils/logger.js

const { createLogger, format, transports } = require('winston');
const path = require('path');

// Define custom log format
const logFormat = format.combine(
  format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  format.printf(
    (info) => `${info.timestamp} [${info.level.toUpperCase()}]: ${info.message}`
  )
);

// Create logger instance
const logger = createLogger({
  level: 'info',
  format: logFormat,
  transports: [
    // Console output
    new transports.Console(),
    // Log errors to error.log
    new transports.File({
      filename: path.join(__dirname, '../logs/error.log'),
      level: 'error',
    }),
    // Log all info and above to combined.log
    new transports.File({
      filename: path.join(__dirname, '../logs/combined.log'),
    }),
  ],
});

// If not in production, also log to the console with colorized output
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    })
  );
}

module.exports = logger;
