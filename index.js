$(document).ready(function(){
  var music;
  var halt = false;
  var today = new Date;
  document.getElementById('date').innerHTML= today.toLocaleDateString();

  function tracks(element1,element2) {
    $.each(music.slice(element1,element2), function(key, value){
      $('#trackList').append(
        $('<tr>').append(
          $('<td>').text(value.name),
          $('<td>').text(value.album),
          $('<td>').append(
          '<iframe src="https://embed.spotify.com/?uri=' + value.uri + '" frameborder="0" allowtransparency="true"></iframe>')
        )
      )
    })
  }

  $.get('https://api.spotify.com/v1/artists/6futYSDVulYR2PktBjTB5W/top-tracks?country=GB', function(data) {
    music = data.tracks.map(function(track) {
      return {name: track.name,
              album: track.album.name,
              popularity: track.popularity,
              uri: track.uri }});
    tracks(0,5)
  });

  $('#all-tracks').click(function(){
    if(halt != true) {
      tracks(5,10);
      halt = true;
    };
  });

});
