const mongoose = require('mongoose');

const PlaylistSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.Number,
    required: true
  },
  title: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  tracklist: {
    type: mongoose.Schema.Types.Array,
    required: true
  },
}, {collection: 'playlists'});

module.exports = mongoose.model('playlist', PlaylistSchema);
