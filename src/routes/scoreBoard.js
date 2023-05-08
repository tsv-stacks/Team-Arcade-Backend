const router = require('express').Router();
// const authorize = require('../middleware/authorize');
let FlappyScoreBoard = require('../models/flappyscoreboard.model');
let RunScoreBoard = require('../models/runscoreboard.model');
let TetrisScoreBoard = require('../models/tetrisscoreboard.model');

router.route('/').get((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(
    '<h1>/flappy for FlappyScoreBoard<br/>/run for RunScoreBoard<br/>/tetris for TetrisScoreBoard</h1>'
  );
});

router.route('/flappy').get((req, res) => {
  FlappyScoreBoard.find()
    .then((scoreBoard) => res.json(scoreBoard))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/flappy/add').post((req, res) => {
  const name = req.body.name;
  const score = Number(req.body.score);
  const img = req.body.img;
  const newFlappyScoreBoard = new FlappyScoreBoard({ name, score, img });

  newFlappyScoreBoard
    .save()
    .then(() => res.json('Score added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/run').get((req, res) => {
  RunScoreBoard.find()
    .then((scoreBoard) => res.json(scoreBoard))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/run/add').post((req, res) => {
  const name = req.body.name;
  const score = Number(req.body.score);
  const img = req.body.img;
  const newRunScoreBoard = new RunScoreBoard({ name, score, img });

  newRunScoreBoard
    .save()
    .then(() => res.json('Score added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/tetris').get((req, res) => {
  TetrisScoreBoard.find()
    .then((scoreBoard) => res.json(scoreBoard))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/tetris/add').post((req, res) => {
  const name = req.body.name;
  const score = Number(req.body.score);
  const img = req.body.img;
  const newTetrisScoreBoard = new TetrisScoreBoard({ name, score, img });

  newTetrisScoreBoard
    .save()
    .then(() => res.json('Score added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
