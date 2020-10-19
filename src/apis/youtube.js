import axios from 'axios';


const KEY = 'AIzaSyBuIo4sZc33DREp0T6sxI62qh4EfingcN4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
