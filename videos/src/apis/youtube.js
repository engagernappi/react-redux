import axios from 'axios';

const KEY = 'AIzaSyBTfalxXJLz1VBqU30ED9zjdgeT96Id8IQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});