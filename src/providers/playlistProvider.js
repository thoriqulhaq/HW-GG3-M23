const playlist = require('../models/playlistModel');
const { checkSongExist, checkSongExistInPlaylist } = require('../utils/helper');


function addPlaylistSong (songId) {
    if (!checkSongExist(songId)) {
        return {
            status: false,
            message: "Song not found",
        };
    }
    
    if (checkSongExistInPlaylist(songId)) {
        return {
            status: false,
            message: "Song already exist in playlist",
        };
    }
    
    playlist.addPlaylistItem(songId);
    
    const playlistItem = playlist.getPlaylistItemById(songId);
    
    return {
        status: true,
        message: "Song added to playlist",
        data : playlistItem
    };
}

function playPlaylistSong (songId) {
    if (!checkSongExist(songId)) {
        return {
            status: false,
            message: "Song not found",
        };
    }
    
    if (!checkSongExistInPlaylist(songId)) {
        return {
            status: false,
            message: "Song not found in playlist",
        };
    }
    
    playlist.editPlaylistItem({
        id: songId,
        numOfPlays: parseInt(playlist.getPlaylistItemById(songId).numOfPlays) + 1,
    });
    
    const playlistItem = playlist.getPlaylistItemById(songId);
    
    return {
        status: true,
        message: "Song played",
        data : playlistItem
    };
}

function getPlaylistSong (sortMostPlayed) {
    const playlistItem = playlist.getPlaylistItem();
    
    if (sortMostPlayed) {
        playlistItem.sort((a, b) => b.numOfPlays - a.numOfPlays);
    }
    
    return {
        status: true,
        message: "Playlist item retrieved",
        data: playlistItem,
    };
}

module.exports = {
    addPlaylistSong,
    playPlaylistSong,
    getPlaylistSong,
}