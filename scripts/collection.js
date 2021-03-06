var buildCollectionItemTemplate = function() {
     var template =
     '<div class="collection-album-container column fourth">'
   + '  <img src="assets/images/album_covers/01.png"/>'
   + '  <div class="collection-album-info caption">'
   + '    <p>'
   + '      <a class="album-name" href="album.html"> The Colors </a>'
   + '      <br/>'
   + '      <a href="album.html"> Pablo Picasso </a>'
   + '      <br/>'
   + '      X songs'
   + '      <br/>'
   + '    </p>'
   + '  </div>'
   + '</div>'
   ;

    return $(template);
};

$(window).load(function() {
     // #1 selects element in collection.html with class of album-covers, assigns to variable
     var $collectionContainer = $('.album-covers');
     // #2 clears all content inside album-covers
     $collectionContainer.empty(); //another jquery method
 
     // #3 for loop adds collectionItemTemplate 12 times, one for each album
     for (var i = 0; i < 12; i++) {
         var $newThumbnail = buildCollectionItemTemplate();
         $collectionContainer.append($newThumbnail); // append method
     }
}); 
