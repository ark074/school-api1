
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const schoolRoutes = require('./routes/schools');

app.use(bodyParser.json());
app.use('/api', schoolRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
