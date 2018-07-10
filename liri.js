//require packages
var dotenv = require("dotenv").config();
var fs = require("fs");
var twitter = require("twitter");
var Spotify = require("node-spotify-api");
var request = require("request");

//api keys
var keys = require("./keys.js")
var spotify = new Spotify(keys.spotify);
var client = new twitter(keys.twitter);

var command = process.argv[2];


switch (command){


//Twitter
case "my-tweets":

//tweets from my twitter account
var twitterName = process.argv[3];
client.get('statuses/user_timeline', {screen_name:twitterName}, function(error, tweets, response) {
   
    for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text);
    }
   
 });



//spotify
case "spotify-this-song":
//setting arguments for spotify?(not sure if needed or if doing them right...)
var songName = process.argv[3]

//searching spotify to get back data on a song(add in more types? such as artist, and album?)
spotify.search({ type: 'track', query: songName, limit: 3}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   data.tracks.items.forEach(function(song, i){
       var searchTrack = data.tracks.items[i]

       console.log(searchTrack.artists[0].name);
       console.log(searchTrack.name)
       console.log(searchTrack.album.name)
       console.log(searchTrack.preview_url)
       console.log(searchTrack.url)
       console.log('-------------------------------------') 
   })
  });



//OMDB(Movie)/Request

//requesting data from OMDB
//request('http://www.omdbapi.com', function (error, response, body) {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
//});

//set up 'movie-this' command for showing movie information in the node.js command line
}