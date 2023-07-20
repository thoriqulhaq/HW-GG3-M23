const { addSong, getSongs } = require('../providers/songProvider');
const { successResponse, errorResponse } = require('../utils/response');

function addSongHandler (req, res) {
    const { title, artist, url } = req.body;
    
    if (!title || !artist || !url) {
        errorResponse(res, 'Title, artist, and url are required');
    }
    
    const result = addSong({
        title,
        artist,
        url,
    });
    
    if (result.status) {
        successResponse(res, result.message);
    } else {
        errorResponse(res, result.message);
    }
}

function getSongsHandler (req, res) {
    const result = getSongs();
    
    if (result.status) {
        successResponse(res, result.message, result.data);
    } else {
        errorResponse(res, result.message);
    }
}

module.exports = {
    addSongHandler,
    getSongsHandler,
}