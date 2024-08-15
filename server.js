const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.get('/api/random-number', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  res.json({ value: randomNumber.toString() });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});