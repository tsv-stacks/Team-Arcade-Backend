const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
require('dotenv').config();
// const admin = require('firebase-admin');
// const serviceAccount = require('./cert.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

const app = express();
const port = process.env.PORT || 3020;
const uri = process.env.DATABASE_URI;

app.use(helmet());
app.use(cors());
app.use(express.json());

mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connected');
});

const scoreBoardRouter = require('./src/routes/scoreBoard');

app.use('/scoreboard', scoreBoardRouter);

app.listen(port, () => {
  console.log(`Server on port: ${port}`);
});

app.get('/', (req, res) => {
  res.send('NODE API');
});
