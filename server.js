const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.DATABASE_URI;

app.use(cors());
app.use(express.json());

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 20000 });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connected');
});

const scoreBoardRouter = require('./routes/scoreBoard');
const usersRouter = require('./routes/users');

app.use('/scoreboard', scoreBoardRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server on port: ${port}`);
});

app.get('/', (req, res) => {
  res.send('NODE API');
});
