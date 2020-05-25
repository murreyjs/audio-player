const mongoose = require('mongoose');

const TrackSchema = mongoose.Schema({
  title: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  artist: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  src: {
    type: mongoose.Schema.Types.String,
    required: true
  },
});

module.exports = mongoose.model('Track', TrackSchema);
