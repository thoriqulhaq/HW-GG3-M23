const song = require('../models/songModel');

let playlistItem = [
    {
        songId: 1,
        numOfPlays: 0,
    }
];

const playlist = {
    addPlaylistItem: (songId) => {
        playlistItem.push({
            songId: songId,
            numOfPlays: 0,
        });
    },
    getPlaylistItem: () => {
        const data = [];
        
        playlistItem.forEach((item) => {
            const songDetail = song.getSongById(item.songId);
            data.push({
                songId: item.songId,
                song: songDetail,
                numOfPlays: item.numOfPlays,
            }); 
        });
        
        return data;
    },
    getPlaylistItemById: (songId) => {
        const songDetail = playlistItem.find((item) => item.songId == songId);

        if (!songDetail) {
            return null;
        }
        
        const data = {
            songId: songDetail.songId,
            song: song.getSongById(songDetail.songId),
            numOfPlays: songDetail.numOfPlays,
        };
        
        return data;
    },
    editPlaylistItem: (newSong) => {
        const currentPlaylistItemIndex = playlistItem.findIndex((s) => s.songId == newSong.id);
        const currentSong = playlistItem[currentPlaylistItemIndex];
        
        playlistItem[currentPlaylistItemIndex] = {
            songId: newSong.id?? currentSong.songId,
            numOfPlays: newSong.numOfPlays?? currentSong.numOfPlays,
        };
    },
    removePlaylistItem: (songId) => {
        playlistItem = playlistItem.filter((item) => item != songId);
    }
};

module.exports = playlist;
