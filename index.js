$(document).ready(function(){
  var music;
  var today = new Date;
  var halt = false;
  document.getElementById('date').innerHTML= today.toLocaleDateString();

  function tracks(a,b) {
    $.each(music.slice(a,b), function(key, value){
      $('#five-tracks .list').append(
        $('<li>').append(
          $('<h3 class=tracks>').append(
            value.name + ' '+value.popularity
          )))
    });
  }

  $.get('https://api.spotify.com/v1/artists/6futYSDVulYR2PktBjTB5W/top-tracks?country=GB', function(data) {
    music = data.tracks.map(function(track) {
      return {name: track.name, album: track.name.album, popularity: track.popularity }});
    tracks(0,5)
  });

  $('#all-tracks').click(function(){
    if(halt != true) {
      tracks(5,10);
      halt = true;
    };
  });

});
