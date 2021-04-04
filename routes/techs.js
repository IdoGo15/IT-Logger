const express = require('express');
const router = express.Router();

const Tech = require('../models/Tech');

// @route      GET /techs
// @desc       Get all techs
router.get('/', async (req,res) => {
  try {
    await Tech.find({}).then(techs => res.send(techs));
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route      POST /techs
// @desc       Add a tech
router.post('/', (req,res) => {
  try {
    const { firstName, lastName } = req.body;
    let newTech = new Tech({ firstName, lastName });
    newTech.save().then(tech => res.send(tech));
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});


// @route      DELETE /techs/:id
// @desc       Delete a tech
router.delete('/:id', (req,res) => {
  res.send('Delete a tech');
});
module.exports = router;