const express = require('express');
require('dotenv').config();

const app = express();
const schoolRoutes = require('./routes/schools');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('School API is running');
});

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
