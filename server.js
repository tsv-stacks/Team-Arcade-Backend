const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.DATABASE_URI;

app.use(cors());
app.use(express.json());

mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connected');
});

const scoreBoardRouter = require('./routes/scoreBoard');

app.use('/scoreboard', scoreBoardRouter);

app.listen(port, () => {
  console.log(`Server on port: ${port}`);
});

app.get('/', (req, res) => {
  res.send('NODE API');
});
