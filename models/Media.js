const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  url: { type: String, required: true },
  type: { type: String, required: true },
});

module.exports = mongoose.model('Media', mediaSchema);
