const express = require('express');
const router = express.Router();
const Log = require('../models/Log');

// @route      GET /logs
// @desc       Get all logs
router.get('/', async (req,res) => {
  try {
  let text = req.query.q;
  if(text){
    const filtered = (await Log.find({})).filter(log => log.message.includes(text));
    res.send(filtered)
  } else {
    await Log.find({}).then(logs => res.send(logs));
  }

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
  try {
    Log.findOneAndUpdate({_id: req.params.id}, {
      $set: req.body
    },{new: true}).then(() => res.sendStatus(200));
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});


// @route      DELETE /logs/:id
// @desc       Delete a log
router.delete('/:id', (req,res) => {
  try {
    Log.findByIdAndRemove({_id: req.params.id}).then((removedLog) => res.send(removedLog));
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;