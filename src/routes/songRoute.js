const express = require('express')
const router = express.Router()
const { addSongHandler, getSongsHandler } = require('../controllers/songController');

router.get('/', getSongsHandler).post('/', addSongHandler);

module.exports = router
