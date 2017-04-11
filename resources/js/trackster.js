$(document).ready(function() {
  $('#search-icon').click(function() {
    var text = $('#search-bar').val();

    Trackster.searchTracksByTitle(text);
  });
});

var Trackster = {};
/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {

};

/*
  Given a search term as a string, query the Spotify API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  var url = 'https://api.spotify.com/v1/search?type=track&q=' + title;

  $.get(url, function(data, status) {
      console.log(data);
  });
};
