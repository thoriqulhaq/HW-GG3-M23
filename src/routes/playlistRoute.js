const express = require('express')
const router = express.Router()
const { addPlaylistSongHandler, playPlaylistSongHandler, getPlaylistSongHandler } = require('../controllers/playlistController');

router.get('/', getPlaylistSongHandler).post('/', addPlaylistSongHandler);
router.get('/:songId/play', playPlaylistSongHandler);

module.exports = router