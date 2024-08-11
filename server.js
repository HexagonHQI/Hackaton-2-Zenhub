// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// PostgreSQL setup
const pool = new Pool({
  user: 'HexagonSQL',
  host: 'localhost',
  database: 'zenhub_db',
  password: 'Doujifat950',
  port: 5432,
});

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); 

app.post('/submit-feedback', async (req, res) => {
  const { name, feedback } = req.body;
  try {
    await pool.query(
      'INSERT INTO feedback (name, feedback) VALUES ($1, $2)',
      [name, feedback]
    );
    res.status(200).send('Feedback submitted successfully!');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error submitting feedback.');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
