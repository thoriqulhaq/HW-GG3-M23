const playlist = require('../models/playlistModel');
const song = require('../models/songModel');

function checkSongExist (songId) {
    const data = song.getSongById(songId);

    return data ? true : false;
}

function checkSongExistInPlaylist (songId) {
    const data = playlist.getPlaylistItemById(songId);
    
    return data ? true : false;
}   

module.exports = {
    checkSongExist,
    checkSongExistInPlaylist,
}