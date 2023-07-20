let songs = [
    {
        id: 1,
        title: "Beautiful Now",
        artist: [
            "Zedd", 
            "Jon Bellion"
        ],
        url: "https://open.spotify.com/track/2ISSQPb9LHHiV6ng2NXosL?si=78d2e9f1b9f54ccd",
    },
    {
        id: 2,
        title: "Tafsir Cinta",
        artist: [
            "Panji Sakti",
        ],
        url: "https://open.spotify.com/track/2G7WBMsY8soTSra7dQfoRW?si=a0888cc93e3b4dc7",
    },
]

const song = {
    addSong: (song) => {
        songs.push({
            id: songs.length + 1,
            title: song.title,
            artist: [...song.artist],
            url : song.url,
        });
    },
    getSongs: () => {
        return songs;
    },
    getSongById: (songId) => {
        return songs.find((song) => song.id == songId);
    }
};

module.exports = song;