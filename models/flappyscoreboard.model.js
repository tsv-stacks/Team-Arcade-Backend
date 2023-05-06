const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newScoreSchema = new Schema({
  name: {
    type: String,
    trim: true,
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

const FlappScoreBoard = mongoose.model('FlappyNewScore', newScoreSchema);

module.exports = FlappScoreBoard;
