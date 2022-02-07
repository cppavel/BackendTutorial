const mongoose = require('mongoose');
const catSchema = new mongoose.Schema({
  catName: {
    type: String,
    required: true,
  },
  catBreed: {
    type: String,
    required: true,
  },
})
module.exports = mongoose.model('Cat',catSchema)