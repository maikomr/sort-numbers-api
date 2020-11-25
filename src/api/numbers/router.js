const express = require('express');
const NumbersService = require('./NumbersService');

const router = express.Router();

router.post('/sort', (req, res) => {
  const { numberListStr } = req.body;
  const result = numberListStr.match(/^[0-9]+(,[0-9]+)*$/g);
  if(result == null) {
    return res.status(400).json({ message: 'Invalid format' });
  }
  const sortedNumbers = NumbersService.sort(numberListStr.split(',').map(x => parseInt(x)));
  res.json(sortedNumbers);
});

module.exports = router;
