angular.module('itunes').service('itunesService', function($http, $q){
  //This service is what will do the 'heavy lifting' and get our data from the iTunes API.
  //Also note that we're using a 'service' and not a 'factory' so all your methods you want to call in your controller need to be on 'this'.

  //Write a method that accepts an artist's name as the parameter, then makes a 'JSONP' http request to a url that looks like this
  //https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
  //Note that in the above line, artist is the parameter being passed in.
  //You can return the http request or you can make your own promise in order to manipulate the data before you resolve it.

    //Code here

    this.getData = function(query, entity) {
      var baseUrl = 'https://itunes.apple.com/search?term=';
      return $http.jsonp(baseUrl + query + '&callback=JSON_CALLBACK' + "&entity=" + entity)
      .then(function(response) {
        var newArr = [];
        response.data.results.forEach(function(entry){
          console.log(entry);
          var artistObj = {}
          artistObj.AlbumArt = entry.artworkUrl100;
          artistObj.Song = entry.trackName;
          artistObj.Artist = entry.artistName;
          artistObj.Collection = entry.collectionName;
          artistObj.CollectionPrice = entry.collectionPrice;
          artistObj.Play = entry.previewUrl;
          artistObj.Type = entry.kind;
          newArr.push(artistObj);
        })
        return newArr;
      });

    }



    /*
      AlbumArt: "http://a3.mzstatic.com/us/r30/Features4/v4/22/be/30/22be305b-d988-4525-453c-7203af1dc5a3/dj.srlprmuo.100x100-75.jpg"
      Artist: "Nelly"
      Collection: "Nellyville"
      CollectionPrice: 11.99
      Play: "http://a423.phobos.apple.com/us/r1000/013/Music4/v4/4a/ab/7c/4aab7ce2-9a72-aa07-ac6b-2011b86b0042/mzaf_6553745548541009508.plus.aac.p.m4a"
      Type: "song"

      54266496
artistName
:
"As I Lay Dying"
artistViewUrl
:
"https://itunes.apple.com/us/artist/as-i-lay-dying/id54266496?uo=4"
artworkUrl30
:
"https://is4-ssl.mzstatic.com/image/thumb/Music/v4/24/b0/ef/24b0efad-2aa0-bc5f-ddcc-73003c68f216/source/30x30bb.jpg"
artworkUrl60
:
"https://is4-ssl.mzstatic.com/image/thumb/Music/v4/24/b0/ef/24b0efad-2aa0-bc5f-ddcc-73003c68f216/source/60x60bb.jpg"
artworkUrl100
:
"https://is4-ssl.mzstatic.com/image/thumb/Music/v4/24/b0/ef/24b0efad-2aa0-bc5f-ddcc-73003c68f216/source/100x100bb.jpg"
collectionCensoredName
:
"Frail Words Collapse"
collectionExplicitness
:
"notExplicit"
collectionId
:
54266890
collectionName
:
"Frail Words Collapse"
collectionPrice
:
9.99
collectionViewUrl
:
"https://itunes.apple.com/us/album/undefined/id54266890?i=54266766&uo=4"
country
:
"USA"
currency
:
"USD"
discCount
:
1
discNumber
:
1
isStreamable
:
true
kind
:
"song"
previewUrl
:
"http://a1649.phobos.apple.com/us/r1000/097/Music/v4/4d/0d/53/4d0d53a8-d089-25e8-d944-351c90f36856/mzaf_6383239707614802865.m4a"
primaryGenreName
:
"Rock"
releaseDate
:
"2003-07-01T07:00:00Z"
trackCensoredName
:
"Undefined"
trackCount
:
12
trackExplicitness
:
"notExplicit"
trackId
:
54266766
trackName
:
"Undefined"
trackNumber
:
7
trackPrice
:
1.29
trackTimeMillis
:
136680
trackViewUrl
:
"https://itunes.apple.com/us/album/undefined/id54266890?i=54266766&uo=4"
wrapperType
:
"track"
  */

});
