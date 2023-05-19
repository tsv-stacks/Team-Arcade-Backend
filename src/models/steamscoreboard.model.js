const mongoose = require('mongoose');
// const { validName } = require('./validName');

const Schema = mongoose.Schema;

const newScoreSchema = new Schema({
  name: {
    type: String,
    minLength: 1,
    trim: true,
    // validate: [validName, 'Please enter a valid name'],
    required: [true, 'Please enter a name'],
  },
  score: {
    type: Number,
    required: true,
    default: 0,
  },
  img: {
    type: String,
    required: false,
    default: 'https://i1.sndcdn.com/artworks-000189080723-ez2uad-t500x500.jpg',
  },
  date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

const SteamScoreBoard = mongoose.model('SteamNewScore', newScoreSchema);

module.exports = SteamScoreBoard;
