// server.js

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/routes');
const errorHandler = require('./middleware/errorHandler');
const logger = require('./utils/logger');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(helmet()); // Secure HTTP headers
app.use(cors({
  origin: [process.env.FRONTEND_URL, 'http://localhost:3000'], // Update with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // If you need to send cookies or authentication headers
}));
app.use(express.json()); // Parse JSON request bodie

// Routes
app.use('/api', contactRoutes); // Use contact routes under /api

// Health Check Route
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'API is running.' });
});

// Error Handling Middleware (should be after all other middleware and routes)
app.use(errorHandler);

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
