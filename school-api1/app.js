const express = require('express');
require('dotenv').config();

const app = express();
const schoolRoutes = require('./routes/schools');

// Middleware to parse JSON bodies
app.use(express.json());

// Debug middleware to log request bodies
app.use((req, res, next) => {
  console.log('Incoming request body:', req.body);
  next();
});

app.get('/', (req, res) => {
  res.send('School API is running');
});

// Use the school routes
app.use('/api', schoolRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
