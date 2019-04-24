import YOUTUBE_API_KEY from '../config/youtube.js/youtube.js'
var searchYouTube = (options, callback) => {
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: options.key,
      part: "snippet",
      videoEmbeddable: "true",
      type: "video",
      q: options.query,
      maxResults: options.max,
    },
    success: function (options) {
      console.log('chatterbox: Message sent');
    },
    error: function (options) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
  
};
// options object with query, max, key
// https://www.youtube.com/watch?v=OwAGdZKLMCc
export default searchYouTube;
