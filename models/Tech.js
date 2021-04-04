const mongoose = require('mongoose');

const TechSchema = mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Tech', TechSchema);