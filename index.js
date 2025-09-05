const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

// Database connection
const connectDB = require('./config/db');

// Route imports
const wasteItemsRouter = require('./routes/wasteItems');
const recyclingProcessesRouter = require('./routes/recyclingProcesses');
const recyclingOperationsRouter = require('./routes/recyclingOperations');
const resourceInventoryRouter = require('./routes/resourceInventory');
const missionAnalyticsRouter = require('./routes/missionAnalytics');
const optimizationRouter = require('./routes/optimization');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// API Routes
app.use('/api/waste-items', wasteItemsRouter);
app.use('/api/recycling-processes', recyclingProcessesRouter);
app.use('/api/recycling-operations', recyclingOperationsRouter);
app.use('/api/inventory', resourceInventoryRouter);
app.use('/api/analytics', missionAnalyticsRouter);
app.use('/api/optimization', optimizationRouter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Mars Waste Management Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});

module.exports = app;