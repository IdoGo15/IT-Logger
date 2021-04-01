const express = require('express');
const router = express.Router();

// @route      GET /logs
// @desc       Get all logs
router.get('/', (req,res) => {
  res.send('Get all logs');
});


// @route      POST /logs
// @desc       Add a log
router.post('/', (req,res) => {
  res.send('Added a log');
});

// @route      PUT /logs/:id
// @desc       Update a log
router.put('/:id', (req,res) => {
  res.send('Update a log');
});


// @route      DELETE /logs/:id
// @desc       Delete a log
router.delete('/:id', (req,res) => {
  res.send('Delete a log');
});
module.exports = router;