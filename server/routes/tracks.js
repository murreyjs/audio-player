const express = require('express');
const router = express.Router();
const Track = require('../models/Track');

// Get all tracks
router.get('/', async (req, res) => {
  try {
    const tracks = await Track.find();
    res.json(tracks);
  }
  catch (err) {
    res.json(err);
  }
});

// Get track by ObjectId
router.get('/:trackId', async (req, res) => {
  try {
    const track = await Track.findById(req.params.trackId);
    res.json(track);
  }
  catch (err) {
    res.json(err);
  }
});

// Add new Track
router.post('/', async (req, res) => {
  const track = new Track({
    title: req.body.title,
    artist: req.body.artist,
    src: req.body.src
  });

  try {
    const savedTrack = await track.save();
    res.json(savedTrack);
  }
  catch (err) {
    res.json(err);
  }

});

module.exports = router;
