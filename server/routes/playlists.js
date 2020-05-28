const express = require('express');
const router = express.Router();
const Playlist = require('../models/Playlist');

// Get all playlists
router.get('/', async (req, res) => {
  try {
    const playlists = await Playlist.find();
    res.json(playlists);
  }
  catch (err) {
    res.json(err);
  }
});

// Get playlist by ObjectId
router.get('/:playlistId', async (req, res) => {
  try {
    const playlist = await Playlist.findById(req.params.playlistId);
    res.json(playlist);
  }
  catch (err) {
    res.json(err);
  }
});

// Add new playlist
router.post('/', async (req, res) => {
  const playlist = new Playlist({
    userId: req.body.userId,
    title: req.body.title,
    tracklist: req.body.tracklist
  });

  try {
    const savedPlaylist = await playlist.save();
    res.json(savedPlaylist);
  }
  catch (err) {
    res.json(err);
  }

});

module.exports = router;
