const song = require('../models/songModel');

function addSong (song) {
    song.addSong(song);
    
    return {
        status: true,
        message: "Song added",
    };
}

function getSongs () {
    return {
        status: true,
        message: "Songs retrieved",
        data: song.getSongs(),
    }
}

module.exports = {
    addSong,
    getSongs,
}