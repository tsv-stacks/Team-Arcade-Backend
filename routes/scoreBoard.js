const router = require('express').Router();
let ScoreBoard = require('../models/scoreboard.model');

router.route('/').get((req, res) => {
  ScoreBoard.find()
    .then((scoreBoard) => res.json(scoreBoard))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const score = Number(req.body.score);
  const img = req.body.img;
  const newScoreBoard = new ScoreBoard({ name, score, img });

  newScoreBoard
    .save()
    .then(() => res.json('Score added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
