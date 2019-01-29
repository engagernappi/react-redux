const songsReducer = () => {
    return [
        { title: 'Sound 1', duration: '4:00' },
        { title: 'Sound 2', duration: '3:43' },
        { title: 'Sound 3', duration: '5:23' },
        { title: 'Sound 4', duration: '2:04' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SELECT_SONG') {
        return action.payload;
    }

    return selectedSong;
};