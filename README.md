# liri-node-app

LIRI (Language Interpretation and Recognition Interface) is a command line node app that takes specific parameters and give back information from the Spotify, IMDB, and Twitter api.

It takes the following commands:

* my-tweets - will give you your last 20 tweets

* spotify-this-song - will take the song that you give it and return Artist, Song Name, Album, and a preview link.

* movie-this - will return the title of the movie, year the movie came out , IMDB rating of the movie, country where the movie was produced, language of the movie, plot of the movie, actors in the movie, and the movie's rotten tomato score.

* do-what-it-says - will run spotify-this-song for "I Want it That Way,"

Enter these commands into the command line after inputing node liri.js to see the result.

NPM Packages used:
 - request package to retrieve data from the OMDB API
 - node-spotify-api package in order to retrieve song information from the Spotify API
 - Twitter package to retreive last 20 tweets 

Screenshots are in the repository for viewing.






