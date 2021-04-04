const express = require('express');
const router = express.Router();
const Log = require('../models/Log');

// @route      GET /logs
// @desc       Get all logs
router.get('/', async (req,res) => {
  try {
    await Log.find({}).then(logs => res.send(logs));
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route      POST /logs
// @desc       Add a log
router.post('/', (req,res) => {
  const { message, attention, tech } = req.body;
  try {
    let newLog = new Log({ message, attention, tech });
    res.send(newLog);
    newLog.save().then(log => res.send(log));
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
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