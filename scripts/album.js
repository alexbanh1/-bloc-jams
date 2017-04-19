// would pull from a database irl

var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };
 
 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };

var createSongRow = function(songNumber, songName, songLength) {
    var template =
        '   <tr class="album-view-song-item">'
      + '   <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
     // allows us to store the song number as data in an attribute  
      + '   <td class="song-item-title">' + songName + '</td>'
      + '   <td class="song-item-duration">' + songLength + '</td>'
      + '   </tr>'
      ;
 
    var $row = $(template);

var clickHandler = function() {
    var songNumber = $(this).attr('data-song-number');
        
        if (currentlyPlayingSong !== null) {
            // revert to song # for currently playing song started playing new song
            var currentlyPlayingCell = $('.song-item-number[data-song-number="' + currentlyPlayingSong + '"]');
            currentlyPlayingCell.html(currentlyPlayingSong);
        }
        if (currentlyPlayingSong !== songNumber) {
            // switch from Play to Pause button to indicate new song is playing.
            $(this).html(pauseButtonTemplate);
            currentlyPlayingSong = songNumber;
        } else if (currentlyPlayingSong === songNumber) {
            // Switch from Pause to Play button to pause currently playing song.
            $(this).html(playButtonTemplate);
            currentlyPlayingSong = null;
        }
};
    
var onHover = function(event) {
    var songNumberCell = $(this).find('.song-item-number');
    var songNumber = songNumberCell.attr('data-song-number');
        
    if (songNumber !== currentlyPlayingSong) {
        songNumberCell.html(playButtonTemplate);
    }
    // Placeholder for function logic
};

var offHover = function(event) {
    var songNumberCell = $(this).find('.song-item-number');
    var songNumber = songNumberCell.attr('data-song-number');

    if (songNumber !== currentlyPlayingSong) {
        songNumberCell.html(songNumber);
    }
    // switches play icon back to song number upon mouseleave / offhover 
};
    
    $row.find('.song-item-number').click(clickHandler); // similar to querySelector
    $row.hover(onHover, offHover);
    return $row;
};

var setCurrentAlbum = function(album) {
     // #1 selects all the relevant elements & assigns to vars
     var $albumTitle = $('.album-view-title');
     var $albumArtist = $('.album-view-artist');
     var $albumReleaseInfo = $('.album-view-release-info');
     var $albumImage = $('.album-cover-art');
     var $albumSongList = $('.album-view-song-list');
 
     // #2
     $albumTitle.text(album.title);
     $albumArtist.text(album.artist);
     $albumReleaseInfo.text(album.year + ' ' + album.label);
     $albumImage.attr('src', album.albumArtUrl);
 
     // #3 ensures working with clean slate
     $albumSongList.empty();
 
     // #4 passes through the loop to populate all songs for the selected album
     for (var i = 0; i < album.songs.length; i++) {
         var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
         $albumSongList.append($newRow);
     }
 };


var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

var currentlyPlayingSong = null;

$(document).ready(function() {
     setCurrentAlbum(albumPicasso);
});