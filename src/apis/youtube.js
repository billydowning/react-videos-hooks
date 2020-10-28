import axios from 'axios';


const KEY = 'AIzaSyC49SfXr-mzWIvyjeQYhP7lNpC5soDbS3k';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
