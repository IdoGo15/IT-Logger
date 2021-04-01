const express = require('express');
const router = express.Router();

// @route      GET /techs
// @desc       Get all techs
router.get('/', (req,res) => {
  res.send('Get all techs');
});


// @route      POST /techs
// @desc       Add a tech
router.post('/', (req,res) => {
  res.send('Added a tech');
});


// @route      DELETE /techs/:id
// @desc       Delete a tech
router.delete('/:id', (req,res) => {
  res.send('Delete a tech');
});
module.exports = router;