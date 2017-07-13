var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '<VJP4bun8o3700ySCfYPpjStYX>',
  consumer_secret: '<J15qy1nqNEUwuVKH0VwzM4W2F4RaCIlEPIh8XvyGpYHDW9weYL>',
  access_token_key: '<866491035408617472-k5eqkeHVWsxlMJt2aPa31H6XFYPlpYe>',
  access_token_secret: '<jZp9OSEBO2JZx5udIAYddcrZ5Gintjl8VjoFrJvdIV1wt>',
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

console.log("the bot is starting");

var Twit = require('twit');
var fs = require('fs');

var config = require('./keys')
console.log('keys')

var T = new Twit(config);

//==============GET==========================
//===========functionality search/tweets ==============
var params = {
    screen_name: "@rangers",
    count: 20,
    lang: 'en',  
}

//================User Input required 'statuses/user_timeline' ============
T.get('statuses/user_timeline', params, gotData);
//gotData function to pull data parameter
function gotData(err, data, response){
    console.log(data);
    var tweets = data.statuses;
    for (var i = 0; i < data.length; i++) {
    console.log(data[i].text, " ", data[i].created_at);
    }
};



var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: <"yc333c6db43c844379c0567ef5cc681d6">,
  secret: <"95bfcd1dfa994e15aad921f649da3348">
});
 
spotify.search({ type: 'track', query: 'I Want it That Way' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});



var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  console.log('body:', body); // Print the HTML for the Google homepage. 
});