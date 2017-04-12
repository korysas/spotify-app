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
  $('#list').empty();

  for (var i = 0; i < tracks.length; i++) {
    console.log(tracks[i].name)
    var htmlSongRow =
    '<div class="row song">' +
      '<div class="col-xs-2">' +
        '<a target="_blank" href="' + tracks[i].preview_url + '"><i id="play-button" class="fa fa-lg fa-play-circle-o"></i></a>' +
      '</div>' +
      '<div class="col-xs-4">' +
        tracks[i].name +
      '</div>' +
      '<div class="col-xs-2">' +
        tracks[i].artists[0].name +
      '</div>' +
      '<div class="col-xs-2">' +
        tracks[i].album.name +
      '</div>' +
      '<div class="col-xs-2">' +
        tracks[i].popularity +
      '</div>' +
    '</div>';

    $('#list').append(htmlSongRow);
  }
};

/*
  Given a search term as a string, query the Spotify API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  var url = 'https://api.spotify.com/v1/search?type=track&q=' + title;

  $.get(url, function(data, status) {
      console.log(data.tracks.items);
      Trackster.renderTracks(data.tracks.items);
  });
};
