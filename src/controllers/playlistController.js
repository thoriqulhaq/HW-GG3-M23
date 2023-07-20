const { addPlaylistSong, playPlaylistSong, getPlaylistSong } = require('../providers/playlistProvider');
const { successResponse, errorResponse } = require('../utils/response');

function addPlaylistSongHandler (req, res) {
    const { songId } = req.body;
    
    if (!songId) {
        errorResponse(res, 'Song ID is required');
    }

    const result = addPlaylistSong(songId);
    
    if (result.status) {
        successResponse(res, result.message, result.data);
    } else {
        errorResponse(res, result.message);
    }
}

function playPlaylistSongHandler (req, res) {
    const { songId } = req.params;
    
    if (!songId) {
        errorResponse(res, 'Song ID is required');
    }
    
    const result = playPlaylistSong(songId);
    
    if (result.status) {
        successResponse(res, result.message, result.data);
    } else {
        errorResponse(res, result.message);
    }
}

function getPlaylistSongHandler (req, res) {
    const { sortMostPlayed } = req.query;
    const result = getPlaylistSong(sortMostPlayed);
    
    if (result.status) {
        successResponse(res, result.message, result.data);
    } else {
        errorResponse(res, result.message);
    }
}


module.exports = {
    addPlaylistSongHandler,
    playPlaylistSongHandler,
    getPlaylistSongHandler,
}